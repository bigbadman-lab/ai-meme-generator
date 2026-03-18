"use server";

import { createClient } from "@/lib/supabase/server";
import { getProfile } from "@/lib/actions/profile";
import { createClient as createSupabaseAdminClient } from "@supabase/supabase-js";

export async function generateMockMemes(
  promotionContext?: string
): Promise<{ error: string | null }> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  const profile = await getProfile();
  if (!profile) {
    return { error: "Missing profile. Please complete onboarding again." };
  }

  const promotion = (promotionContext ?? "").trim() || null;

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error("[meme-gen] Missing SUPABASE_SERVICE_ROLE_KEY");
    return { error: "Server misconfiguration (templates access)." };
  }
  if (!process.env.OPENAI_API_KEY) {
    console.error("[meme-gen] Missing OPENAI_API_KEY");
    return { error: "Server misconfiguration (OpenAI key)." };
  }

  const adminSupabase = createSupabaseAdminClient(
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } }
  );

  const { data: templatesRaw, error: templatesError } = await adminSupabase
    .from("meme_templates")
    .select("*");

  if (templatesError) {
    console.error("[meme-gen] Failed to fetch meme_templates", templatesError);
    return { error: templatesError.message || "Failed to load templates." };
  }

  const templates = (templatesRaw ?? []).filter(
    (t: any) => t && typeof t === "object"
  );

  const isActive = (t: any): boolean => {
    if (typeof t.is_active === "boolean") return t.is_active;
    if (typeof t.active === "boolean") return t.active;
    if (typeof t.status === "string") return t.status.toLowerCase() === "active";
    // If the template table doesn't have an explicit active flag, assume everything is active.
    return true;
  };

  const nonEmpty = (v: any): boolean =>
    v !== null && v !== undefined && String(v).trim().length > 0;

  const hasSlot3 = (t: any): boolean => {
    // We treat any evidence of a 3rd slot as incompatible with the current 1/2-slot schema.
    return (
      nonEmpty(t.slot_3_role) ||
      t.slot_3_max_chars != null ||
      t.slot_3_max_lines != null ||
      t.slot_3_x != null ||
      t.slot_3_y != null
    );
  };

  const hasSlot2 = (t: any): boolean => {
    return (
      nonEmpty(t.slot_2_role) ||
      t.slot_2_max_chars != null ||
      t.slot_2_max_lines != null ||
      t.slot_2_x != null ||
      t.slot_2_y != null
    );
  };

  const toInt = (v: any, fallback: number): number => {
    const n = typeof v === "number" ? v : Number(v);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
  };

  const sanitizeTitle = (v: unknown): string => {
    const s = typeof v === "string" ? v : "";
    return s.replace(/\s+/g, " ").trim().slice(0, 70);
  };

  const sanitizeSlotTextSingleLine = (
    v: unknown,
    maxChars: number
  ): string | null => {
    if (typeof v !== "string") return null;
    const cleaned = v.replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
    if (!cleaned) return null;
    const truncated = cleaned.slice(0, maxChars).trim();
    return truncated ? truncated : null;
  };

  const safeJsonParse = (content: string): unknown => {
    // response_format=json_object should be valid JSON, but keep parsing defensive.
    try {
      return JSON.parse(content);
    } catch {
      const firstBrace = content.indexOf("{");
      const lastBrace = content.lastIndexOf("}");
      if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace)
        return null;
      const sliced = content.slice(firstBrace, lastBrace + 1);
      try {
        return JSON.parse(sliced);
      } catch {
        return null;
      }
    }
  };

  type CompatibleTemplate = {
    template_id: string;
    template_name: string;
    slug: string;
    template_logic: string;
    meme_mechanic: string;
    emotion_style: string;
    slot_1_role: string;
    slot_2_role: string | null;
    slot_1_max_chars: number;
    slot_2_max_chars: number;
    slot_1_max_lines: number;
    slot_2_max_lines: number;
    context_fit: string;
    business_fit: string;
    promotion_fit: string;
    example_output: string;
    isTwoSlot: boolean;
  };

  const compatibleTemplates: CompatibleTemplate[] = templates
    .filter((t: any) => isActive(t))
    .filter(
      (t: any) => String(t.slug ?? "").trim().toLowerCase() !== "distracted-boyfriend"
    )
    .filter((t: any) => !hasSlot3(t))
    .map((t: any) => {
      const template_id = String(
        t.template_id ?? t.id ?? t.slug ?? ""
      ).trim();
      return {
        template_id,
        template_name: String(t.template_name ?? t.name ?? "").trim(),
        slug: String(t.slug ?? "").trim(),
        template_logic: String(t.template_logic ?? "").trim(),
        meme_mechanic: String(t.meme_mechanic ?? "").trim(),
        emotion_style: String(t.emotion_style ?? "").trim(),
        slot_1_role: String(t.slot_1_role ?? "").trim(),
        slot_2_role: t.slot_2_role ? String(t.slot_2_role).trim() : null,
        slot_1_max_chars: toInt(t.slot_1_max_chars, 60),
        slot_2_max_chars: toInt(t.slot_2_max_chars, 60),
        slot_1_max_lines: toInt(t.slot_1_max_lines, 2),
        slot_2_max_lines: toInt(t.slot_2_max_lines, 2),
        context_fit: String(t.context_fit ?? "").trim(),
        business_fit: String(t.business_fit ?? "").trim(),
        promotion_fit: String(t.promotion_fit ?? "").trim(),
        example_output: String(t.example_output ?? "").trim(),
        isTwoSlot: hasSlot2(t),
      } satisfies CompatibleTemplate;
    })
    .filter((t) => t.template_id && t.template_name && t.slug && t.slot_1_role);

  if (compatibleTemplates.length === 0) {
    console.error("[meme-gen] No compatible templates found after filtering.");
    return { error: "No compatible meme templates found." };
  }

  const apiKey = process.env.OPENAI_API_KEY as string;

  const generateForTemplate = async (
    template: CompatibleTemplate
  ): Promise<{ title: string; top_text: string; bottom_text: string | null } | null> => {
    const brand_name = profile.brand_name ?? "";
    const what_you_do = profile.what_you_do ?? "";
    const audience = profile.audience ?? "";
    const country = profile.country ?? "";

    const slot2Instructions = template.isTwoSlot
      ? `Slot 2:
- role: ${template.slot_2_role ?? "slot_2"}
- max_chars: ${template.slot_2_max_chars}
- max_lines: ${template.slot_2_max_lines}`
      : `This template has only 1 slot. You MUST set bottom_text to null.`;

    const prompt = `You generate brand-safe meme captions that follow a specific template.

Brand context:
- brand_name: ${brand_name}
- what_you_do: ${what_you_do}
- audience: ${audience}
- country: ${country}

Promotion/deal context (optional):
${promotion ?? "None"}

Template metadata:
- template_name: ${template.template_name}
- slug: ${template.slug}
- template_id: ${template.template_id}
- meme_mechanic: ${template.meme_mechanic}
- emotion_style: ${template.emotion_style}
- template_logic: ${template.template_logic}
- context_fit: ${template.context_fit}
- business_fit: ${template.business_fit}
- promotion_fit: ${template.promotion_fit}
- example_output: ${template.example_output}

Slot roles & constraints:
Slot 1:
- role: ${template.slot_1_role}
- max_chars: ${template.slot_1_max_chars}
- max_lines: ${template.slot_1_max_lines}

${slot2Instructions}

Rules:
- Make it punchy, internet-native, and useful for posting.
- Avoid bland, generic filler. Be specific to the brand + audience.
- Do not include markdown, code blocks, or HTML.
- Do not include disallowed/unsafe content (hate, sexual, illegal, harassment, personal data).
- Respect constraints: top_text must be <= slot 1 max_chars, and bottom_text must be <= slot 2 max_chars if present.

If you need to correct for length, truncate (do not invent new meanings).

Return ONLY valid JSON with this exact shape:
{
  "title": string,
  "top_text": string,
  "bottom_text": ${template.isTwoSlot ? "string" : "null"}
}`;

    console.log("[meme-gen] OpenAI prompt", {
      template: template.slug,
      isTwoSlot: template.isTwoSlot,
    });

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.6,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              "You are an expert meme writer. Return only JSON. No markdown. No extra keys.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[meme-gen] OpenAI error", {
        template: template.slug,
        status: res.status,
        text,
      });
      return null;
    }

    const json = (await res.json()) as any;
    const content = json?.choices?.[0]?.message?.content ?? "{}";
    const parsed = safeJsonParse(String(content));
    if (!parsed || typeof parsed !== "object") {
      console.error("[meme-gen] Failed to parse JSON output", {
        template: template.slug,
        content,
      });
      return null;
    }

    const p = parsed as any;
    const title = sanitizeTitle(p.title);
    const top_text = sanitizeSlotTextSingleLine(
      p.top_text,
      template.slot_1_max_chars
    );
    const bottom_text = template.isTwoSlot
      ? sanitizeSlotTextSingleLine(p.bottom_text, template.slot_2_max_chars)
      : null;

    // Validation: avoid inserting broken rows.
    if (!title || !top_text) {
      console.error("[meme-gen] Validation failed (missing title/top_text)", {
        template: template.slug,
        parsed,
      });
      return null;
    }
    if (template.isTwoSlot && !bottom_text) {
      console.error("[meme-gen] Validation failed (missing bottom_text)", {
        template: template.slug,
        parsed,
      });
      return null;
    }

    return { title, top_text, bottom_text };
  };

  let insertedCount = 0;
  let failedCount = 0;

  for (const template of compatibleTemplates) {
    const maxAttempts = 2;
    let generated:
      | { title: string; top_text: string; bottom_text: string | null }
      | null = null;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      generated = await generateForTemplate(template);
      if (generated) break;

      console.error("[meme-gen] Generation failed; retrying", {
        template: template.slug,
        attempt,
      });
    }

    if (!generated) {
      failedCount++;
      continue;
    }

    const row = {
      user_id: user.id,
      template_id: template.template_id,
      title: generated.title,
      format: template.template_name,
      top_text: generated.top_text,
      bottom_text: generated.bottom_text,
      image_url: null,
    };

    const { error: insertError } = await supabase
      .from("generated_memes")
      .insert(row);

    if (insertError) {
      console.error("[meme-gen] Insert failed", {
        template: template.slug,
        insertError,
      });
      failedCount++;
      continue;
    }

    insertedCount++;
  }

  console.log("[meme-gen] Generation summary", {
    compatibleTemplates: compatibleTemplates.length,
    insertedCount,
    failedCount,
  });

  if (insertedCount === 0) {
    return { error: "Failed to generate memes. Check server logs for details." };
  }

  return { error: null };
}
