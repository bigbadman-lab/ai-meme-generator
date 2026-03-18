"use server";

import { createClient } from "@/lib/supabase/server";
import { getProfile } from "@/lib/actions/profile";
import { createClient as createSupabaseAdminClient } from "@supabase/supabase-js";
import { randomUUID } from "node:crypto";
import { renderMemePNGFromTemplate } from "@/renderer/renderMemeTemplate";

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

  const TITLE_MAX_CHARS = 45;

  const normalizeSingleLine = (v: unknown): string | null => {
    if (typeof v !== "string") return null;
    const cleaned = v.replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
    return cleaned || null;
  };

  const looksLikeCutOffFragment = (text: string, maxChars: number): boolean => {
    const trimmed = text.trim();
    if (!trimmed) return true;

    // If it's right up against the character limit and doesn't end with punctuation,
    // it's a strong sign the model generated something too long and we *would have*
    // truncated it.
    const endsWithPunctuation = /[.!?]$/.test(trimmed);
    if (trimmed.length >= Math.max(10, maxChars - 2) && !endsWithPunctuation) {
      return true;
    }

    // If it ends on a dangling preposition/conjunction, treat it like an incomplete fragment.
    if (/\b(the|a|an|for|on|in|to|of|with|when|where|why|then|if|while|because|before|after|into|from|at|by)\b$/i.test(trimmed)) {
      return true;
    }

    // Avoid super-short outputs that are likely incomplete.
    if (trimmed.length < 4) return true;

    return false;
  };

  const validateTitle = (v: unknown): { value: string | null; failRule: string | null; length: number | null } => {
    const s = normalizeSingleLine(v);
    if (!s) return { value: null, failRule: "title_missing_or_invalid", length: null };
    if (s.length > TITLE_MAX_CHARS) {
      return { value: null, failRule: "title_too_long", length: s.length };
    }
    return { value: s, failRule: null, length: s.length };
  };

  const validateSlotTextSingleLine = (
    v: unknown,
    maxChars: number,
    slotLabel: "top" | "bottom"
  ): { value: string | null; failRule: string | null; length: number | null } => {
    const cleaned = normalizeSingleLine(v);
    if (!cleaned) return { value: null, failRule: `${slotLabel}_missing_or_invalid`, length: null };
    if (cleaned.length > maxChars) {
      return {
        value: null,
        failRule: `${slotLabel}_over_max_chars`,
        length: cleaned.length,
      };
    }
    if (looksLikeCutOffFragment(cleaned, maxChars)) {
      return {
        value: null,
        failRule: `${slotLabel}_likely_fragment_cutoff`,
        length: cleaned.length,
      };
    }
    return { value: cleaned, failRule: null, length: cleaned.length };
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

    // Rendering metadata (MVP: 1-slot / 2-slot only)
    image_filename?: string | null;
    canvas_width: number;
    canvas_height: number;
    font?: string | null;
    font_size?: number | null;
    alignment?: string | null;
    text_color?: string | null;
    stroke_color?: string | null;
    stroke_width?: number | null;

    slot_1_x?: number | null;
    slot_1_y?: number | null;
    slot_1_width?: number | null;
    slot_1_height?: number | null;
    slot_2_x?: number | null;
    slot_2_y?: number | null;
    slot_2_width?: number | null;
    slot_2_height?: number | null;
  };

  const toNullableInt = (v: any): number | null => {
    if (v === null || v === undefined) return null;
    const n = typeof v === "number" ? v : Number(v);
    if (!Number.isFinite(n)) return null;
    return Math.floor(n);
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
        image_filename: t.image_filename ? String(t.image_filename).trim() : null,
        canvas_width: toNullableInt(t.canvas_width) ?? 1080,
        canvas_height: toNullableInt(t.canvas_height) ?? 1080,
        font: t.font ? String(t.font).trim() : null,
        font_size: toNullableInt(t.font_size),
        alignment: t.alignment ? String(t.alignment).trim() : null,
        text_color: t.text_color ? String(t.text_color).trim() : null,
        stroke_color: t.stroke_color ? String(t.stroke_color).trim() : null,
        stroke_width: toNullableInt(t.stroke_width),
        slot_1_x: toNullableInt(t.slot_1_x),
        slot_1_y: toNullableInt(t.slot_1_y),
        slot_1_width: toNullableInt(t.slot_1_width),
        slot_1_height: toNullableInt(t.slot_1_height),
        slot_2_x: toNullableInt(t.slot_2_x),
        slot_2_y: toNullableInt(t.slot_2_y),
        slot_2_width: toNullableInt(t.slot_2_width),
        slot_2_height: toNullableInt(t.slot_2_height),
      } satisfies CompatibleTemplate;
    })
    .filter((t) => t.template_id && t.template_name && t.slug && t.slot_1_role);

  if (compatibleTemplates.length === 0) {
    console.error("[meme-gen] No compatible templates found after filtering.");
    return { error: "No compatible meme templates found." };
  }

  const apiKey = process.env.OPENAI_API_KEY as string;
  const memeTemplatesBucket =
    process.env.MEME_TEMPLATES_BUCKET ?? "meme-templates";
  const generatedMemeBucket =
    process.env.MEME_GENERATED_MEMES_BUCKET ?? "generated-memes";

  const generateForTemplate = async (
    template: CompatibleTemplate,
    attempt: number
  ): Promise<{ title: string; top_text: string; bottom_text: string | null } | null> => {
    const brand_name = profile.brand_name ?? "";
    const what_you_do = profile.what_you_do ?? "";
    const audience = profile.audience ?? "";
    const country = profile.country ?? "";

    const topIdeal = Math.max(8, Math.floor(template.slot_1_max_chars * (attempt >= 2 ? 0.8 : 0.95)));
    const bottomIdeal = Math.max(8, Math.floor(template.slot_2_max_chars * (attempt >= 2 ? 0.8 : 0.95)));

    const slot2Instructions = template.isTwoSlot
      ? `Slot 2:
- role: ${template.slot_2_role ?? "slot_2"}
- max_chars: ${template.slot_2_max_chars}
- max_lines: ${template.slot_2_max_lines}`
      : `This template has only 1 slot. You MUST set bottom_text to null.`;

    const prompt = `You generate brand-safe meme captions that follow a specific template.

Hard constraints (must obey):
- top_text MUST be <= ${template.slot_1_max_chars} characters and be a complete, finishable phrase (no mid-word cut-offs).
- If the phrase would exceed the limit, rewrite it shorter and simpler. Never output an incomplete fragment.
- top_text should ideally be <= ${topIdeal} characters.
- bottom_text MUST be <= ${template.slot_2_max_chars} characters when present, and be complete. If it would exceed the limit, rewrite shorter and simpler.
- bottom_text should ideally be <= ${bottomIdeal} characters when present.
- Do not include markdown, HTML, code blocks, or newline characters.

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
- Make it punchy, internet-native, and useful for posting (optimize for shareability).
- Avoid bland, generic filler. Be specific to the brand + audience.
- Use the template_logic and meme_mechanic to choose the angle. emotion_style sets tone.
- Do not include disallowed/unsafe content (hate, sexual, illegal, harassment, personal data).
- Never truncate mid-sentence: rewrite so it fits.

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
        attempt,
        status: res.status,
        text,
      });
      return null;
    }

    const json = (await res.json()) as any;
    const content = json?.choices?.[0]?.message?.content ?? "{}";
    const parsed = safeJsonParse(String(content));
    if (!parsed || typeof parsed !== "object") {
      console.error("[meme-gen] Validation failed (json_parse_failed)", {
        template: template.slug,
        attempt,
        slotType: template.isTwoSlot ? "2-slot" : "1-slot",
        content,
      });
      return null;
    }

    const p = parsed as any;

    // Validation: avoid inserting broken rows.
    const titleValidation = validateTitle(p.title);
    const topValidation = validateSlotTextSingleLine(
      p.top_text,
      template.slot_1_max_chars,
      "top"
    );
    const rawBottom = p.bottom_text;
    const bottomValidation = template.isTwoSlot
      ? validateSlotTextSingleLine(
          rawBottom,
          template.slot_2_max_chars,
          "bottom"
        )
      : { value: null as string | null, failRule: null as string | null, length: null as number | null };

    if (!template.isTwoSlot) {
      // Enforce the contract: 1-slot templates must have `bottom_text = null`.
      if (rawBottom !== null && rawBottom !== undefined) {
        const rawBottomNormLen = normalizeSingleLine(rawBottom)?.length ?? null;
        console.error("[meme-gen] Validation failed", {
          template: `${template.template_name} (${template.slug})`,
          attempt,
          slotType: "1-slot",
          title_len: titleValidation.length,
          title_max: TITLE_MAX_CHARS,
          top_len: topValidation.length,
          top_max: template.slot_1_max_chars,
          bottom_len: rawBottomNormLen,
          bottom_max: template.slot_2_max_chars,
          rule: "one_slot_bottom_text_not_null",
        });
        return null;
      }
    }

    if (!titleValidation.value || !topValidation.value) {
      const rule = !titleValidation.failRule
        ? topValidation.failRule
        : titleValidation.failRule;
      console.error("[meme-gen] Validation failed", {
        template: `${template.template_name} (${template.slug})`,
        attempt,
        slotType: template.isTwoSlot ? "2-slot" : "1-slot",
        title_len: titleValidation.length,
        title_max: TITLE_MAX_CHARS,
        top_len: topValidation.length,
        top_max: template.slot_1_max_chars,
        bottom_len: template.isTwoSlot ? bottomValidation.length : null,
        bottom_max: template.isTwoSlot ? template.slot_2_max_chars : null,
        rule,
      });
      return null;
    }

    if (template.isTwoSlot && !bottomValidation.value) {
      console.error("[meme-gen] Validation failed", {
        template: `${template.template_name} (${template.slug})`,
        attempt,
        slotType: "2-slot",
        title_len: titleValidation.length,
        title_max: TITLE_MAX_CHARS,
        top_len: topValidation.length,
        top_max: template.slot_1_max_chars,
        bottom_len: bottomValidation.length,
        bottom_max: template.slot_2_max_chars,
        rule: bottomValidation.failRule,
      });
      return null;
    }

    const finalTitle = titleValidation.value!;
    const finalTop = topValidation.value!;
    const finalBottom = template.isTwoSlot ? bottomValidation.value : null;

    return { title: finalTitle, top_text: finalTop, bottom_text: finalBottom };
  };

  let insertedCount = 0;
  let failedCount = 0;

  for (const template of compatibleTemplates) {
    const maxAttempts = 2;
    let generated:
      | { title: string; top_text: string; bottom_text: string | null }
      | null = null;

    let attemptUsed = 1;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      attemptUsed = attempt;
      generated = await generateForTemplate(template, attempt);
      if (generated) break;

      console.error("[meme-gen] Generation failed; retrying", {
        template: template.slug,
        attempt,
      });
    }

    if (!generated) {
      failedCount++;
      console.error("[meme-gen] Skipped template after retries", {
        template: `${template.template_name} (${template.slug})`,
        attempts: maxAttempts,
        slotType: template.isTwoSlot ? "2-slot" : "1-slot",
        wasRetried: maxAttempts > 1,
      });
      continue;
    }

    let imageUrl: string | null = null;
    try {
      const imageFilename = template.image_filename ?? "";
      if (imageFilename) {
        const { data: baseBlob, error: baseDownloadError } =
          await adminSupabase.storage
            .from(memeTemplatesBucket)
            .download(imageFilename);

        if (baseDownloadError) {
          throw new Error(
            baseDownloadError.message ||
              `Failed to download base image: ${imageFilename}`
          );
        }

        const arrayBuffer = await (baseBlob as any).arrayBuffer();
        const baseImageBuffer = Buffer.from(arrayBuffer);

        const pngBuffer = await renderMemePNGFromTemplate({
          baseImageBuffer,
          template,
          topText: generated.top_text,
          bottomText: generated.bottom_text,
        });

        const objectPath = `generated_memes/${user.id}/${template.template_id}/${randomUUID()}.png`;

        const { error: uploadError } = await adminSupabase.storage
          .from(generatedMemeBucket)
          .upload(objectPath, pngBuffer, {
            contentType: "image/png",
            upsert: true,
          });

        if (uploadError) {
          throw new Error(
            uploadError.message || `Failed to upload generated meme`
          );
        }

        const publicUrlRes = adminSupabase.storage
          .from(generatedMemeBucket)
          .getPublicUrl(objectPath);

        imageUrl = publicUrlRes.data.publicUrl ?? null;
      }
    } catch (e) {
      const message = e instanceof Error ? e.message : "Unknown render error";
      console.error("[meme-gen] Render/upload failed", {
        template: `${template.template_name} (${template.slug})`,
        message,
      });
      imageUrl = null;
    }

    const row = {
      user_id: user.id,
      template_id: template.template_id,
      title: generated.title,
      format: template.template_name,
      top_text: generated.top_text,
      bottom_text: generated.bottom_text,
      image_url: imageUrl,
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
      console.error("[meme-gen] Skipped template (DB insert failed)", {
        template: `${template.template_name} (${template.slug})`,
        attemptUsed,
        slotType: template.isTwoSlot ? "2-slot" : "1-slot",
        wasRetried: attemptUsed > 1,
      });
      continue;
    }

    insertedCount++;
    console.log("[meme-gen] Inserted generated meme", {
      template: `${template.template_name} (${template.slug})`,
      slotType: template.isTwoSlot ? "2-slot" : "1-slot",
      attemptUsed,
      wasRetried: attemptUsed > 1,
      title_len: generated.title.length,
      top_len: generated.top_text.length,
      top_max: template.slot_1_max_chars,
      bottom_len: generated.bottom_text?.length ?? null,
      bottom_max: template.slot_2_max_chars,
    });
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
