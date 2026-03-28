/**
 * Run: npx tsx scripts/verify-sanitize-meme-text.ts
 */
import assert from "node:assert/strict";
import { normalizeFinalMemeText } from "../lib/memes/sanitize-meme-text";

const cases: Array<{ input: string | null | undefined; expect: string | null }> = [
  { input: "Walking into the Zoom call 15 minutes late,", expect: "Walking into the Zoom call 15 minutes late" },
  { input: "When the client says can we make it pop,", expect: "When the client says can we make it pop" },
  { input: "POV: you're the only one on camera", expect: "POV: you're the only one on camera" },
  { input: "Me reading the brief...", expect: "Me reading the brief..." },
  { input: null, expect: null },
  { input: "Hot take,", expect: "Hot take" },
  { input: "  spaced ,  ", expect: "spaced" },
];

for (const { input, expect: expected } of cases) {
  const got = normalizeFinalMemeText(input);
  assert.equal(got, expected, `normalizeFinalMemeText(${JSON.stringify(input)})`);
}

console.log("sanitize-meme-text: all checks passed.");
