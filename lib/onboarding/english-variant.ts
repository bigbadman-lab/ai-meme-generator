export type EnglishVariant = "en-GB" | "en-US";

export type EnglishVariantOnboardingInput = {
  country: string;
  /** Reserved for future inference (TLD, scan hints). */
  websiteUrl?: string | null;
  hints?: unknown;
};

/**
 * v1: country-only mapping. Extend later with websiteUrl / hints without changing call sites.
 */
export function inferEnglishVariantFromOnboarding(
  input: EnglishVariantOnboardingInput
): EnglishVariant {
  const c = String(input.country ?? "").trim();
  if (c === "United States") return "en-US";
  if (c === "United Kingdom") return "en-GB";
  return "en-GB";
}

/** DB null/legacy rows → effective variant for prompts. */
export function resolveEffectiveEnglishVariant(
  stored: string | null | undefined
): EnglishVariant {
  if (stored === "en-US") return "en-US";
  return "en-GB";
}

export function englishVariantPromptInstruction(variant: EnglishVariant): string {
  return variant === "en-US"
    ? "Use US English spelling and phrasing throughout."
    : "Use UK English spelling and phrasing throughout.";
}
