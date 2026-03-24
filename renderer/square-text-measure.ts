import { createCanvas, type CanvasRenderingContext2D } from "canvas";

/**
 * Text width measurement for square text memes — must match SVG caption styling in
 * `renderSquareTextMeme.ts`: 52px Arial, Helvetica, sans-serif (regular weight).
 */
let cachedCtx: CanvasRenderingContext2D | null = null;

function getSquareTextMeasureContext(): CanvasRenderingContext2D {
  if (!cachedCtx) {
    const c = createCanvas(4096, 128);
    const ctx = c.getContext("2d");
    if (!ctx) {
      throw new Error("[square-text-measure] Canvas 2D context unavailable");
    }
    ctx.font = "52px Arial, Helvetica, sans-serif";
    cachedCtx = ctx;
  }
  return cachedCtx;
}

/** Returns horizontal advance width in CSS pixels for the full line string. */
export function measureSquareTextLineWidthPx(text: string): number {
  const t = String(text ?? "");
  if (!t) return 0;
  return getSquareTextMeasureContext().measureText(t).width;
}

const dynamicCtxCache = new Map<string, CanvasRenderingContext2D>();

/**
 * Generic line-width measurement for caption rendering with explicit font sizing/family.
 */
export function measureLineWidthPx(
  text: string,
  fontSizePx: number,
  fontFamily: string
): number {
  const t = String(text ?? "");
  if (!t) return 0;
  const size = Number.isFinite(fontSizePx) ? Math.max(1, fontSizePx) : 52;
  const rawFamily = String(fontFamily ?? "").trim() || "Arial, Helvetica, sans-serif";
  const family = /sans-serif/i.test(rawFamily)
    ? rawFamily
    : `${rawFamily}, sans-serif`;
  const key = `${size}|${family}`;

  let ctx = dynamicCtxCache.get(key) ?? null;
  if (!ctx) {
    const c = createCanvas(4096, 128);
    const next = c.getContext("2d");
    if (!next) {
      throw new Error("[square-text-measure] Canvas 2D context unavailable");
    }
    next.font = `${size}px ${family}`;
    ctx = next;
    dynamicCtxCache.set(key, ctx);
  }

  return ctx.measureText(t).width;
}
