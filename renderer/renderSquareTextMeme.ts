import sharp from "sharp";
import { wrapSquareTextMemeLines } from "@/renderer/caption-wrap";

const CANVAS = 1080;
const MARGIN_X = 96;

const FONT_SIZE = 52;

const LINE_HEIGHT_SINGLE = Math.round(FONT_SIZE * 1.18);
const LINE_HEIGHT_STACK = Math.round(FONT_SIZE * 1.08);
const BLOCK_GAP = Math.round(FONT_SIZE * 0.68);

/**
 * Primary wrap driver: target max characters per line for readability and meme-style rhythm.
 * Lower than full canvas width so long sentences split into 2–4 lines instead of one stretched line.
 * (Still a broad block vs narrow “quote column” — ~40–44 chars at 52px Arial.)
 */
const MAX_READABILITY_CHARS_PER_LINE = 42;

/**
 * If text is longer than this, require at least two lines so a single SVG line cannot
 * carry an entire long sentence (even when template max_lines was 1).
 */
const LONG_TEXT_FORCE_MIN_LINES_CHARS = 42;

function escapeXML(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function normalizeText(text: string): string {
  return String(text ?? "")
    .replace(/\r?\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Combine template slot max lines with readability: long copy may need more lines than
 * the template minimum so we never render one ultra-wide line when wrapping can split it.
 */
function effectiveMaxLines(requestedMaxLines: number, text: string): number {
  const t = normalizeText(text);
  if (!t) return Math.min(16, Math.max(1, requestedMaxLines));

  const cap = Math.min(16, Math.max(1, requestedMaxLines));
  const linesNeeded = Math.ceil(t.length / MAX_READABILITY_CHARS_PER_LINE);

  let minLines = Math.max(1, linesNeeded);
  if (t.length > LONG_TEXT_FORCE_MIN_LINES_CHARS) {
    minLines = Math.max(minLines, 2);
  }

  return Math.min(16, Math.max(cap, minLines));
}

/**
 * Phrase-scored word-boundary layouts (`wrapSquareTextMemeLines`) for natural meme breaks;
 * same max line length and line budget as before.
 */
function wrapSquareTextBlock(text: string, requestedMaxLines: number): string[] {
  const t = normalizeText(text);
  if (!t) return [];

  const maxLines = effectiveMaxLines(requestedMaxLines, t);
  return wrapSquareTextMemeLines(t, MAX_READABILITY_CHARS_PER_LINE, maxLines);
}

function blockLineHeight(lines: string[]): number {
  return lines.length > 1 ? LINE_HEIGHT_STACK : LINE_HEIGHT_SINGLE;
}

function blockHeight(lines: string[]): number {
  if (!lines.length) return 0;
  const lh = blockLineHeight(lines);
  return lines.length * lh;
}

/**
 * Approximate horizontal advance for Arial at 1em (no letter-spacing), summed then scaled by
 * `fontSizePx`. Used only to center the text block on the canvas; wrapping is unchanged.
 */
function estimateArialLineWidthEm(line: string): number {
  let em = 0;
  for (const ch of line) {
    if (ch === " ") {
      em += 0.27;
      continue;
    }
    const code = ch.codePointAt(0) ?? 0;
    // Wide non-Latin / symbols: treat as ~1em so block centering isn’t wildly off.
    if (code > 0x2e7f) {
      em += 1.0;
      continue;
    }
    if ("ijl1|!.,;:'`".includes(ch)) {
      em += 0.185;
      continue;
    }
    if ("frt".includes(ch)) {
      em += 0.26;
      continue;
    }
    if ("mwMW@%".includes(ch)) {
      em += 0.76;
      continue;
    }
    if (ch >= "A" && ch <= "Z") {
      em += 0.57;
      continue;
    }
    if (ch >= "0" && ch <= "9") {
      em += 0.55;
      continue;
    }
    em += 0.52;
  }
  return em;
}

function estimateTextBlockWidthPx(lines: string[], fontSizePx: number): number {
  if (!lines.length) return 0;
  let maxEm = 0;
  for (const line of lines) {
    maxEm = Math.max(maxEm, estimateArialLineWidthEm(line));
  }
  return maxEm * fontSizePx;
}

/**
 * Center the whole text block on the canvas; every line shares the same start X with
 * text-anchor start (left-aligned inside the block). Single-line is centered as a block.
 */
function renderTextBlockLines(
  lines: string[],
  startY: number
): { svgFragments: string[]; nextY: number } {
  if (!lines.length) {
    return { svgFragments: [], nextY: startY };
  }

  const blockW = estimateTextBlockWidthPx(lines, FONT_SIZE);
  const xRaw = (CANVAS - blockW) / 2;
  // If estimate overshoots canvas (rare), avoid negative X so Sharp still renders.
  const x = Math.max(0, xRaw);
  const lh = blockLineHeight(lines);

  const fragments: string[] = [];
  let y = startY;
  for (const line of lines) {
    fragments.push(
      `<text x="${x}" y="${y}" text-anchor="start" class="caption">${escapeXML(line)}</text>`
    );
    y += lh;
  }
  return { svgFragments: fragments, nextY: y };
}

/**
 * Plain 1080×1080 PNG: white background, black Arial; readability-first wrap; blocks centered
 * horizontally with left-aligned lines inside each block.
 */
export async function renderSquareTextMemePng(params: {
  topText: string;
  bottomText: string | null;
  slot1MaxLines: number;
  slot2MaxLines: number;
}): Promise<Buffer> {
  const top = normalizeText(params.topText);
  const bottom = normalizeText(params.bottomText ?? "");

  const maxLines1 = Math.min(16, Math.max(1, params.slot1MaxLines || 8));
  const maxLines2 = Math.min(16, Math.max(1, params.slot2MaxLines || 4));

  const lines1 = wrapSquareTextBlock(top, maxLines1);
  const lines2 =
    bottom && params.slot2MaxLines > 0
      ? wrapSquareTextBlock(bottom, maxLines2)
      : [];

  const h1 = blockHeight(lines1);
  const h2 = blockHeight(lines2);
  const gap = lines1.length > 0 && lines2.length > 0 ? BLOCK_GAP : 0;
  const totalTextHeight = h1 + gap + h2;

  let startY = (CANVAS - totalTextHeight) / 2 + FONT_SIZE * 0.82;
  const minStartY = MARGIN_X + FONT_SIZE * 0.82;
  if (startY < minStartY) startY = minStartY;

  const textElements: string[] = [];

  const block1 = renderTextBlockLines(lines1, startY);
  textElements.push(...block1.svgFragments);
  let y = block1.nextY;

  if (lines1.length > 0 && lines2.length > 0) {
    y += BLOCK_GAP;
  }

  const block2 = renderTextBlockLines(lines2, y);
  textElements.push(...block2.svgFragments);

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${CANVAS}" height="${CANVAS}" viewBox="0 0 ${CANVAS} ${CANVAS}">
  <rect width="${CANVAS}" height="${CANVAS}" fill="#ffffff"/>
  <style>
    .caption {
      fill: #000000;
      font-size: ${FONT_SIZE}px;
      font-family: Arial, Helvetica, sans-serif;
    }
  </style>
  ${textElements.join("\n")}
</svg>
`.trim();

  return sharp(Buffer.from(svg))
    .png()
    .toBuffer();
}
