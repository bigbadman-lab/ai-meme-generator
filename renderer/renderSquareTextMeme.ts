import sharp from "sharp";
import { wrapSquareTextMemeLines } from "@/renderer/caption-wrap";

const CANVAS = 1080;
const MARGIN_X = 96;

const FONT_SIZE = 52;

const LINE_HEIGHT_SINGLE = Math.round(FONT_SIZE * 1.18);
const LINE_HEIGHT_STACK = Math.round(FONT_SIZE * 1.08);
const BLOCK_GAP = Math.round(FONT_SIZE * 0.68);

/**
 * Wide meme line target (~888px text band at 96px side margins, 52px Arial).
 * Intentionally high so multi-line stacks use horizontal space like a square meme, not a quote card.
 */
const MAX_READABILITY_CHARS_PER_LINE = 58;

/**
 * If text is longer than this, require at least two lines so a single SVG line cannot
 * carry an entire long sentence (even when template max_lines was 1).
 */
const LONG_TEXT_FORCE_MIN_LINES_CHARS = 58;

/** Inner offset from canvas edge for multi-line left edge (keeps type off the margin hairline). */
const MULTI_LINE_PAD_X = 16;

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
 * Prefer 2–3 lines for medium copy (meme-wide lines); allow more only when length needs it.
 * Always at least min lines to fit maxChars; never above template/effective ceiling.
 */
function wrapLineBudget(text: string, requestedMaxLines: number): number {
  const t = normalizeText(text);
  if (!t) return Math.min(16, Math.max(1, requestedMaxLines));

  const base = effectiveMaxLines(requestedMaxLines, t);
  const minNeeded = Math.ceil(t.length / MAX_READABILITY_CHARS_PER_LINE);
  const softPreferMax =
    t.length <= 140 ? 3 : t.length <= 260 ? 4 : t.length <= 400 ? 5 : 16;

  return Math.max(minNeeded, Math.min(base, softPreferMax));
}

/**
 * Phrase-scored word-boundary layouts (`wrapSquareTextMemeLines`) for natural meme breaks.
 */
function wrapSquareTextBlock(text: string, requestedMaxLines: number): string[] {
  const t = normalizeText(text);
  if (!t) return [];

  const maxLines = wrapLineBudget(t, requestedMaxLines);
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
 * Single line: centered. Multi-line: same left edge in a wide band (meme style, not a narrow column).
 */
function renderTextBlockLines(
  lines: string[],
  startY: number
): { svgFragments: string[]; nextY: number } {
  if (!lines.length) {
    return { svgFragments: [], nextY: startY };
  }

  const single = lines.length === 1;
  const x = single ? CANVAS / 2 : MARGIN_X + MULTI_LINE_PAD_X;
  const textAnchor = single ? "middle" : "start";
  const lh = blockLineHeight(lines);

  const fragments: string[] = [];
  let y = startY;
  for (const line of lines) {
    fragments.push(
      `<text x="${x}" y="${y}" text-anchor="${textAnchor}" class="caption">${escapeXML(line)}</text>`
    );
    y += lh;
  }
  return { svgFragments: fragments, nextY: y };
}

/**
 * Plain 1080×1080 PNG: white background, black Arial; wide wrap + phrase scoring; single line
 * centered, multi-line left-aligned in the full margin band.
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
