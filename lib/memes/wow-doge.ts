/**
 * Wow Doge template: slug `wow-doge` — doge-style phrase pills, not top/bottom captions.
 */

export const WOW_DOGE_SLUG = "wow-doge";

export function isWowDogeTemplateSlug(slug: string): boolean {
  return String(slug ?? "").trim().toLowerCase() === WOW_DOGE_SLUG;
}

/** Allowed first tokens (lowercase). "go" is optional per product spec. */
export const WOW_DOGE_STARTERS = [
  "wow",
  "much",
  "such",
  "very",
  "so",
  "go",
] as const;

const STARTER_SET = new Set<string>(WOW_DOGE_STARTERS);

const PUNCT_RE = /[.,!?;:'"()[\]{}@#%^&*+=|\\/<>]/;

function normalizePhrase(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

/**
 * Validates model output phrases. Returns canonical lowercase phrases or a machine failure rule.
 */
export function validateWowDogePhrases(raw: unknown): {
  phrases: string[] | null;
  failRule: string | null;
} {
  if (!Array.isArray(raw)) {
    return { phrases: null, failRule: "wow_doge_phrases_not_array" };
  }
  const n = raw.length;
  if (n !== 4 && n !== 5) {
    return { phrases: null, failRule: "wow_doge_phrases_count" };
  }

  const seen = new Set<string>();
  const out: string[] = [];

  for (const item of raw) {
    if (typeof item !== "string") {
      return { phrases: null, failRule: "wow_doge_phrase_type" };
    }
    const t = item.trim();
    if (!t) {
      return { phrases: null, failRule: "wow_doge_phrase_empty" };
    }
    if (PUNCT_RE.test(t) || /["'`]/.test(t)) {
      return { phrases: null, failRule: "wow_doge_punctuation" };
    }
    const words = t.split(/\s+/).filter(Boolean);
    if (words.length < 1 || words.length > 2) {
      return { phrases: null, failRule: "wow_doge_phrase_words" };
    }
    const w0 = words[0].toLowerCase();
    if (!STARTER_SET.has(w0)) {
      return { phrases: null, failRule: "wow_doge_starter" };
    }
    const canon = words.map((w, i) => (i === 0 ? w.toLowerCase() : w)).join(" ");
    const dedupeKey = normalizePhrase(canon);
    if (seen.has(dedupeKey)) {
      return { phrases: null, failRule: "wow_doge_duplicates" };
    }
    seen.add(dedupeKey);
    out.push(canon);
  }

  return { phrases: out, failRule: null };
}

export function buildWowDogeUserPromptBlock(params: {
  brand_name: string;
  what_you_do: string;
  audience: string;
  country: string;
  conversationContext: string | null;
  workspaceSummary: string | null;
  englishVariantNote: string;
  variantBlock: string;
  retrySupplement: string;
}): string {
  const retry = params.retrySupplement.trim();
  return `WOW DOGE TEMPLATE — CUSTOM JSON SHAPE (not top_text/bottom_text memes)

You must return ONLY valid JSON with exactly these keys:
- "title": short display title (plain text, meme-native)
- "phrases": array of EXACTLY 4 OR EXACTLY 5 strings

Phrase rules (every phrase must pass ALL):
- Each phrase is 1 or 2 words only (single space if two words). A 1-word phrase must be a starter alone (e.g. "wow"); prefer 2 words: starter + niche term.
- First word MUST be one of: wow, much, such, very, so, go (use "go" only when it naturally fits; do not force).
- If two words: second word must be a concrete niche term tied to the user's business, audience, or topic — not generic filler.
- Lowercase only (except you may use brand casing only if essential — prefer lowercase doge style).
- No punctuation, no quotes, no emojis, no commas.
- No duplicate phrases (case-insensitive).
- Not full sentences, not normal captions, not setup/punchline meme lines.

Good (plumbing): wow pipes, much leak, such boiler, very drainage, so repair
Bad: "wow your plumbing needs help", "much broken pipe emergency today", "so repair!!!"

Context:
- brand_name: ${params.brand_name}
- what_you_do: ${params.what_you_do}
- audience: ${params.audience}
- country: ${params.country}
- latest_generation_request: ${params.conversationContext ?? "None"}
- workspace_context_summary: ${params.workspaceSummary ?? "None"}
${params.englishVariantNote}

${params.variantBlock}
${retry ? `\nRetry / correction:\n${retry}\n` : ""}

Return ONLY this JSON shape (no markdown, no extra keys):
{
  "title": string,
  "phrases": string[]
}`;
}

export const WOW_DOGE_RETRY_MESSAGES: Record<string, string> = {
  json_parse_failed: `Previous reply was not valid JSON. Return a single JSON object only.`,
  wow_doge_phrases_not_array: `"phrases" must be a JSON array of 4 or 5 strings.`,
  wow_doge_phrases_count: `Use exactly 4 or exactly 5 phrases — not 3, not 6.`,
  wow_doge_phrase_type: `Every phrase must be a string.`,
  wow_doge_phrase_empty: `No empty phrase strings.`,
  wow_doge_punctuation: `Remove all punctuation and quotes from every phrase.`,
  wow_doge_phrase_words: `Each phrase must be 1 or 2 words only.`,
  wow_doge_starter: `Each phrase must start with one of: wow, much, such, very, so, go.`,
  wow_doge_duplicates: `Do not repeat phrases; each line must be unique.`,
  title_missing_or_invalid: `Include a short valid "title" string.`,
  title_too_long: `Shorten "title" to fit the character limit.`,
};

export function getWowDogeRetrySupplement(previousFailureRule: string | null): string {
  if (!previousFailureRule) return "";
  return WOW_DOGE_RETRY_MESSAGES[previousFailureRule] ?? "";
}
