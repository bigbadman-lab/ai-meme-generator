import sharp from "sharp";

/**
 * Doge pill overlay. Font stack lists Canva Sans first for environments that register it;
 * it is not bundled (commercial font). Comic Sans / system fonts approximate classic doge tone elsewhere.
 */
const FONT_STACK = `"Canva Sans", "Comic Sans MS", "Comic Sans", "Trebuchet MS", "Arial Rounded MT Bold", system-ui, sans-serif`;

const PALETTE = [
  "#E63946",
  "#F4A261",
  "#2A9D8F",
  "#E9C46A",
  "#264653",
  "#8338EC",
  "#FF006E",
  "#3A86FF",
  "#06D6A0",
  "#FF9F1C",
];

function escapeXml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shufflePalette(phrases: string[]): string[] {
  let h = 2166136261;
  for (let i = 0; i < phrases.length; i++) {
    for (let j = 0; j < phrases[i].length; j++) {
      h ^= phrases[i].charCodeAt(j);
      h = Math.imul(h, 16777619);
    }
  }
  const rand = mulberry32(h >>> 0);
  const out = [...PALETTE];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

/** Center anchors (cx, cy) — biased away from image center where doge face usually sits. */
function anchorCenters(count: number): [number, number][] {
  if (count === 5) {
    return [
      [230, 170],
      [870, 155],
      [195, 440],
      [915, 430],
      [300, 905],
    ];
  }
  if (count === 4) {
    return [
      [230, 170],
      [870, 155],
      [195, 440],
      [310, 905],
    ];
  }
  throw new Error(`renderWowDogeMemePng: expected 4 or 5 phrases, got ${count}`);
}

export async function renderWowDogeMemePng(params: {
  baseImageBuffer: Buffer;
  phrases: string[];
}): Promise<Buffer> {
  const W = 1080;
  const H = 1080;
  const phrases = params.phrases;
  const n = phrases.length;
  if (n !== 4 && n !== 5) {
    throw new Error(`Wow Doge renderer requires 4 or 5 phrases, got ${n}`);
  }

  const fontSize = 34;
  const padX = 22;
  const padY = 13;
  const approxCharW = fontSize * 0.52;
  const centers = anchorCenters(n);
  const palette = shufflePalette(phrases);

  type Pill = { text: string; w: number; h: number; cx: number; cy: number; fill: string };
  const pills: Pill[] = phrases.map((text, i) => {
    const tw = Math.ceil(text.length * approxCharW);
    const w = Math.min(440, tw + padX * 2);
    const h = fontSize + padY * 2;
    let [cx, cy] = centers[i]!;
    cx = Math.round(Math.min(W - w / 2 - 14, Math.max(w / 2 + 14, cx)));
    cy = Math.round(Math.min(H - h / 2 - 14, Math.max(h / 2 + 14, cy)));
    return {
      text,
      w,
      h,
      cx,
      cy,
      fill: palette[i % palette.length]!,
    };
  });

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`;
  svg += `<defs><filter id="wowDogePillShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.18"/></filter></defs>`;

  for (const p of pills) {
    const x = Math.round(p.cx - p.w / 2);
    const y = Math.round(p.cy - p.h / 2);
    const rx = Math.min(26, Math.floor(p.h / 2));
    svg += `<g filter="url(#wowDogePillShadow)">`;
    svg += `<rect x="${x}" y="${y}" width="${p.w}" height="${p.h}" rx="${rx}" ry="${rx}" fill="#ffffff" stroke="rgba(15,23,42,0.14)" stroke-width="2"/>`;
    const textY = y + p.h / 2 + fontSize * 0.35;
    svg += `<text x="${x + p.w / 2}" y="${textY}" text-anchor="middle" font-family="${FONT_STACK}" font-size="${fontSize}" font-weight="700" fill="${escapeXml(p.fill)}">${escapeXml(p.text)}</text>`;
    svg += `</g>`;
  }
  svg += `</svg>`;

  const svgBuf = Buffer.from(svg);
  return sharp(params.baseImageBuffer)
    .resize(W, H, { fit: "cover" })
    .composite([{ input: svgBuf, top: 0, left: 0 }])
    .png()
    .toBuffer();
}
