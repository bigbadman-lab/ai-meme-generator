/**
 * Final normalization for meme slot text before persistence and rendering.
 * Removes trailing commas only at the end of the string (never internal commas),
 * then trims whitespace. Idempotent for typical inputs.
 *
 * - `null` / `undefined` → `null` (unchanged)
 * - Empty string → `""` (unchanged)
 * - Other strings → trailing commas stripped repeatedly, then `.trim()`
 */

export function normalizeFinalMemeText(
  value: string | null | undefined
): string | null {
  if (value === null || value === undefined) return null;
  if (typeof value !== "string") return null;
  if (value === "") return "";

  let s = value.trim();
  while (s.endsWith(",")) {
    s = s.slice(0, -1).trimEnd();
  }
  return s.trim();
}

export type GeneratedMemeTextFields = {
  title: string;
  top_text: string;
  bottom_text: string | null;
  slot_3_text: string | null;
  names?: string[];
  /** Wow Doge template: canonical phrase list for renderer / variant_metadata. */
  wowDogePhrases?: string[];
};

/**
 * Applies {@link normalizeFinalMemeText} to all meme slot fields on a successful generation payload.
 * Optional slots become `null` if they normalize to an empty string.
 */
export function sanitizeGeneratedMemeTextFields<T extends GeneratedMemeTextFields>(
  generated: T
): T {
  const top = normalizeFinalMemeText(generated.top_text) ?? "";
  const bottom =
    generated.bottom_text == null
      ? null
      : normalizeFinalMemeText(generated.bottom_text);
  const slot3 =
    generated.slot_3_text == null
      ? null
      : normalizeFinalMemeText(generated.slot_3_text);

  return {
    ...generated,
    top_text: top,
    bottom_text: bottom === "" ? null : bottom,
    slot_3_text: slot3 === "" ? null : slot3,
  };
}
