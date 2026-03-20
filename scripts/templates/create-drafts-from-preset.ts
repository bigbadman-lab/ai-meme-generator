import fs from "fs";
import path from "path";
import sharp from "sharp";

type DraftTemplate = {
  template_name: string;
  slug: string;
  image_filename: string;
  is_active: boolean;
  canvas_width: number;
  canvas_height: number;
  text_layout_type: string;
  pattern_type: string;
  meme_mechanic: string;
  template_logic: string;
  emotion_style: string;
  slot_1_role: string;
  slot_2_role: string | null;
  slot_3_role: string | null;
  slot_1_max_chars: number;
  slot_2_max_chars: number | null;
  slot_3_max_chars: number | null;
  slot_1_max_lines: number;
  slot_2_max_lines: number | null;
  slot_3_max_lines: number | null;
  text_transform: string | null;
  context_fit: string | null;
  business_fit: string | null;
  promotion_fit: boolean | null;
  seasonal_fit: string | null;
  weekday_fit: string | null;
  trend_fit: string | null;
  tags: string | null;
  example_output: string | null;
  quality_rank: number;
  slot_1_x: number;
  slot_1_y: number;
  slot_1_width: number;
  slot_1_height: number;
  slot_2_x: number | null;
  slot_2_y: number | null;
  slot_2_width: number | null;
  slot_2_height: number | null;
  slot_3_x: number | null;
  slot_3_y: number | null;
  slot_3_width: number | null;
  slot_3_height: number | null;
  font: string;
  font_size: number;
  alignment: string;
  text_color: string;
  stroke_color: string | null;
  stroke_width: number | null;
};

const THIS_IS_FINE_PRESET = {
  canvas_width: 1080,
  canvas_height: 1080,
  text_layout_type: "top_caption",
  text_transform: "none",
  slot_1_x: 80,
  slot_1_y: 65,
  slot_1_width: 920,
  slot_1_height: 170,
  slot_1_max_chars: 56,
  slot_1_max_lines: 2,
  slot_2_x: null,
  slot_2_y: null,
  slot_2_width: null,
  slot_2_height: null,
  slot_3_x: null,
  slot_3_y: null,
  slot_3_width: null,
  slot_3_height: null,
  slot_2_max_chars: null,
  slot_2_max_lines: null,
  slot_3_max_chars: null,
  slot_3_max_lines: null,
  font: "Arial",
  font_size: 46,
  alignment: "center",
  text_color: "#000000",
  stroke_color: null,
  stroke_width: 0,
};

function getArg(name: string): string | undefined {
  const prefix = `--${name}=`;
  const arg = process.argv.find((a) => a.startsWith(prefix));
  return arg ? arg.slice(prefix.length) : undefined;
}

function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true });
}

function toSlug(filename: string): string {
  const base = path.parse(filename).name;
  return base
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function toTitleCaseFromFilename(filename: string): string {
  const base = path.parse(filename).name;
  return base
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function validateImageDimensions(filePath: string): Promise<{ width: number; height: number }> {
  const metadata = await sharp(filePath).metadata();
  return {
    width: metadata.width ?? 0,
    height: metadata.height ?? 0,
  };
}

function buildDraft(filename: string): DraftTemplate {
  const slug = toSlug(filename);
  const templateName = toTitleCaseFromFilename(filename);

  return {
    template_name: templateName,
    slug,
    image_filename: filename,
    is_active: false,
    canvas_width: THIS_IS_FINE_PRESET.canvas_width,
    canvas_height: THIS_IS_FINE_PRESET.canvas_height,
    text_layout_type: THIS_IS_FINE_PRESET.text_layout_type,
    pattern_type: "reaction",
    meme_mechanic: "reaction",
    template_logic: "A top-caption reaction meme where the caption frames the emotional meaning of the image.",
    emotion_style: "reactive",
    slot_1_role: "reaction caption",
    slot_2_role: null,
    slot_3_role: null,
    slot_1_max_chars: THIS_IS_FINE_PRESET.slot_1_max_chars,
    slot_2_max_chars: THIS_IS_FINE_PRESET.slot_2_max_chars,
    slot_3_max_chars: THIS_IS_FINE_PRESET.slot_3_max_chars,
    slot_1_max_lines: THIS_IS_FINE_PRESET.slot_1_max_lines,
    slot_2_max_lines: THIS_IS_FINE_PRESET.slot_2_max_lines,
    slot_3_max_lines: THIS_IS_FINE_PRESET.slot_3_max_lines,
    text_transform: THIS_IS_FINE_PRESET.text_transform,
    context_fit: null,
    business_fit: null,
    promotion_fit: null,
    seasonal_fit: null,
    weekday_fit: null,
    trend_fit: null,
    tags: null,
    example_output: null,
    quality_rank: 1,
    slot_1_x: THIS_IS_FINE_PRESET.slot_1_x,
    slot_1_y: THIS_IS_FINE_PRESET.slot_1_y,
    slot_1_width: THIS_IS_FINE_PRESET.slot_1_width,
    slot_1_height: THIS_IS_FINE_PRESET.slot_1_height,
    slot_2_x: THIS_IS_FINE_PRESET.slot_2_x,
    slot_2_y: THIS_IS_FINE_PRESET.slot_2_y,
    slot_2_width: THIS_IS_FINE_PRESET.slot_2_width,
    slot_2_height: THIS_IS_FINE_PRESET.slot_2_height,
    slot_3_x: THIS_IS_FINE_PRESET.slot_3_x,
    slot_3_y: THIS_IS_FINE_PRESET.slot_3_y,
    slot_3_width: THIS_IS_FINE_PRESET.slot_3_width,
    slot_3_height: THIS_IS_FINE_PRESET.slot_3_height,
    font: THIS_IS_FINE_PRESET.font,
    font_size: THIS_IS_FINE_PRESET.font_size,
    alignment: THIS_IS_FINE_PRESET.alignment,
    text_color: THIS_IS_FINE_PRESET.text_color,
    stroke_color: THIS_IS_FINE_PRESET.stroke_color,
    stroke_width: THIS_IS_FINE_PRESET.stroke_width,
  };
}

async function createPreview(
  inputPath: string,
  outputPath: string,
  draft: DraftTemplate
): Promise<void> {
  const svg = `
  <svg width="1080" height="1080" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="${draft.slot_1_x}"
      y="${draft.slot_1_y}"
      width="${draft.slot_1_width}"
      height="${draft.slot_1_height}"
      fill="none"
      stroke="#ff0000"
      stroke-width="4"
      stroke-dasharray="12 8"
    />
    <text
      x="${draft.slot_1_x + draft.slot_1_width / 2}"
      y="${draft.slot_1_y + draft.slot_1_height / 2}"
      text-anchor="middle"
      dominant-baseline="middle"
      font-family="Arial"
      font-size="36"
      fill="#ff0000"
    >
      SAMPLE CAPTION
    </text>
  </svg>
  `;

  await sharp(inputPath)
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .png()
    .toFile(outputPath);
}

async function main(): Promise<void> {
  const inputDir = getArg("input");
  const draftsDir = getArg("drafts") ?? "./templates/drafts";
  const previewsDir = getArg("previews") ?? "./templates/previews";
  const preset = getArg("preset");

  if (!inputDir) {
    throw new Error("Missing required --input argument");
  }

  if (!preset) {
    throw new Error("Missing required --preset argument");
  }

  if (preset !== "this-is-fine") {
    throw new Error(`Unsupported preset: ${preset}`);
  }

  ensureDir(draftsDir);
  ensureDir(previewsDir);

  const allFiles = fs.readdirSync(inputDir);
  const pngFiles = allFiles.filter((file) => file.toLowerCase().endsWith(".png"));

  let draftsCreated = 0;
  let previewsCreated = 0;
  const invalidFiles: string[] = [];

  console.log(`Preset: ${preset}`);
  console.log(`Input folder: ${inputDir}`);
  console.log(`PNG files found: ${pngFiles.length}`);

  for (const filename of pngFiles) {
    const fullPath = path.join(inputDir, filename);

    try {
      const { width, height } = await validateImageDimensions(fullPath);

      if (width !== 1080 || height !== 1080) {
        invalidFiles.push(`${filename} (invalid dimensions: ${width}x${height})`);
        continue;
      }

      const draft = buildDraft(filename);
      const draftPath = path.join(draftsDir, `${draft.slug}.json`);
      const previewPath = path.join(previewsDir, `${draft.slug}-preview.png`);

      fs.writeFileSync(draftPath, JSON.stringify(draft, null, 2), "utf8");
      draftsCreated++;

      await createPreview(fullPath, previewPath, draft);
      previewsCreated++;

      console.log(`✓ ${filename} -> ${draft.slug}`);
    } catch (error) {
      invalidFiles.push(`${filename} (${error instanceof Error ? error.message : "unknown error"})`);
    }
  }

  console.log("\nSummary");
  console.log(`Drafts created: ${draftsCreated}`);
  console.log(`Previews created: ${previewsCreated}`);
  console.log(`Invalid/skipped: ${invalidFiles.length}`);

  if (invalidFiles.length > 0) {
    console.log("\nSkipped files:");
    for (const file of invalidFiles) {
      console.log(`- ${file}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
