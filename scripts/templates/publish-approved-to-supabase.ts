import "dotenv/config";

import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";

type ApprovedTemplate = {
  template_name: string;
  slug: string;
  image_filename: string;
  is_active: boolean;
  [key: string]: unknown;
};

type CliOptions = {
  approvedDir: string;
  imagesDir: string;
  bucket: string;
  storagePrefix: string;
  dryRun: boolean;
  slug: string | null;
  limit: number | null;
  reportPath: string;
};

type ApprovedRecord = {
  approvedPath: string;
  template: ApprovedTemplate;
};

type ReportEntry = {
  slug: string;
  status: "processed" | "skipped" | "failed";
  storageKey: string | null;
  assigned_template_id: number | null;
  template_id_source: "reused" | "new" | null;
  dbPayloadSummary: {
    slug: string;
    template_name: string;
    template_id: number;
    image_filename: string;
    is_active: boolean;
  } | null;
  error: string | null;
};

const DEFAULT_APPROVED_DIR = "./templates/approved";
const DEFAULT_BUCKET = "meme-templates";
const DEFAULT_STORAGE_PREFIX = "square";
const DEFAULT_REPORT_PATH = "./templates/reports/publish-approved-report.json";

function getArg(name: string): string | undefined {
  const prefix = `--${name}=`;
  const arg = process.argv.find((value) => value.startsWith(prefix));
  return arg ? arg.slice(prefix.length) : undefined;
}

function parseBooleanArg(value: string | undefined, fallback: boolean): boolean {
  if (value == null || value.trim() === "") return fallback;
  const normalized = value.trim().toLowerCase();
  if (normalized === "true") return true;
  if (normalized === "false") return false;
  throw new Error(`Invalid boolean value: ${value}`);
}

function parseNumberArg(value: string | undefined): number | null {
  if (!value) return null;
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`Invalid numeric value: ${value}`);
  }
  return Math.floor(parsed);
}

function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true });
}

function parseArgs(): CliOptions {
  const approvedDir = getArg("approved") ?? DEFAULT_APPROVED_DIR;
  const imagesDir = getArg("images");
  const bucket = getArg("bucket") ?? DEFAULT_BUCKET;
  const storagePrefix = (getArg("storage-prefix") ?? DEFAULT_STORAGE_PREFIX)
    .trim()
    .replace(/^\/+|\/+$/g, "");
  const dryRun = parseBooleanArg(getArg("dry-run"), false);
  const slug = (getArg("slug") ?? "").trim() || null;
  const limit = parseNumberArg(getArg("limit"));
  const reportPath = getArg("report") ?? DEFAULT_REPORT_PATH;

  if (!imagesDir) {
    throw new Error("Missing required --images argument");
  }

  return {
    approvedDir,
    imagesDir,
    bucket,
    storagePrefix,
    dryRun,
    slug,
    limit,
    reportPath,
  };
}

function safeJsonParse(content: string): unknown {
  try {
    return JSON.parse(content);
  } catch {
    return null;
  }
}

function isApprovedTemplate(value: unknown): value is ApprovedTemplate {
  if (!value || typeof value !== "object") return false;
  const record = value as Partial<ApprovedTemplate>;
  return (
    typeof record.slug === "string" &&
    typeof record.template_name === "string" &&
    typeof record.image_filename === "string"
  );
}

function loadApprovedRecords(options: CliOptions): {
  records: ApprovedRecord[];
  skippedEntries: ReportEntry[];
} {
  const approvedFiles = fs
    .readdirSync(options.approvedDir)
    .filter((file) => file.toLowerCase().endsWith(".json"))
    .sort((a, b) => a.localeCompare(b));

  const records: ApprovedRecord[] = [];
  const skippedEntries: ReportEntry[] = [];

  for (const file of approvedFiles) {
    const approvedPath = path.join(options.approvedDir, file);
    const raw = fs.readFileSync(approvedPath, "utf8");
    const parsed = safeJsonParse(raw);

    if (!isApprovedTemplate(parsed)) {
      skippedEntries.push({
        slug: path.parse(file).name,
        status: "skipped",
        storageKey: null,
        assigned_template_id: null,
        template_id_source: null,
        dbPayloadSummary: null,
        error: "Invalid approved JSON shape",
      });
      continue;
    }

    if (options.slug && parsed.slug !== options.slug) {
      continue;
    }

    records.push({ approvedPath, template: parsed });
  }

  return {
    records: options.limit != null ? records.slice(0, options.limit) : records,
    skippedEntries,
  };
}

function findImagePath(imagesDir: string, template: ApprovedTemplate): string | null {
  const exactPath = path.join(imagesDir, template.image_filename);
  if (fs.existsSync(exactPath)) {
    return exactPath;
  }

  const slugPngPath = path.join(imagesDir, `${template.slug}.png`);
  if (fs.existsSync(slugPngPath)) {
    return slugPngPath;
  }

  const normalizedFilename = template.image_filename.trim().toLowerCase();
  const normalizedSlugPng = `${template.slug}.png`.toLowerCase();
  const allFiles = fs.readdirSync(imagesDir);
  const caseInsensitiveMatch = allFiles.find((file) => {
    const normalized = file.trim().toLowerCase();
    return normalized === normalizedFilename || normalized === normalizedSlugPng;
  });

  return caseInsensitiveMatch ? path.join(imagesDir, caseInsensitiveMatch) : null;
}

function buildStorageKey(storagePrefix: string, slug: string): string {
  return `${storagePrefix}/${slug}.png`;
}

function buildDbPayload(
  template: ApprovedTemplate,
  storageKey: string,
  templateId: number
): Record<string, unknown> {
  const { id: _ignoredId, ...rest } = template as ApprovedTemplate & { id?: unknown };

  return {
    ...rest,
    template_id: templateId,
    image_filename: storageKey,
    is_active: false,
  };
}

function buildPayloadSummary(payload: Record<string, unknown>) {
  return {
    slug: String(payload.slug ?? ""),
    template_name: String(payload.template_name ?? ""),
    template_id: Number(payload.template_id ?? 0),
    image_filename: String(payload.image_filename ?? ""),
    is_active: Boolean(payload.is_active),
  };
}

async function fetchExistingTemplateIdMap(params: {
  supabase: ReturnType<typeof createClient>;
}): Promise<Map<string, number>> {
  const { supabase } = params;
  const { data, error } = await supabase
    .from("meme_templates")
    .select("slug, template_id")
    .not("slug", "is", null);

  if (error) {
    throw new Error(`Failed to load existing template slugs: ${error.message}`);
  }

  const map = new Map<string, number>();
  for (const row of data ?? []) {
    const slug = String((row as any).slug ?? "").trim();
    const templateId = Number((row as any).template_id);
    if (!slug || !Number.isFinite(templateId)) continue;
    map.set(slug, Math.floor(templateId));
  }
  return map;
}

async function fetchNextTemplateIdSeed(params: {
  supabase: ReturnType<typeof createClient>;
}): Promise<number> {
  const { supabase } = params;
  const { data, error } = await supabase
    .from("meme_templates")
    .select("template_id")
    .not("template_id", "is", null)
    .order("template_id", { ascending: false })
    .limit(1);

  if (error) {
    throw new Error(`Failed to fetch max template_id: ${error.message}`);
  }

  const maxId = Number((data?.[0] as any)?.template_id ?? 0);
  if (!Number.isFinite(maxId) || maxId < 1) return 1;
  return Math.floor(maxId) + 1;
}

function resolveTemplateId(params: {
  slug: string;
  existingIdBySlug: Map<string, number>;
  nextTemplateIdRef: { current: number };
}): { templateId: number; source: "reused" | "new" } {
  const { slug, existingIdBySlug, nextTemplateIdRef } = params;
  const existing = existingIdBySlug.get(slug);
  if (existing != null) {
    return { templateId: existing, source: "reused" };
  }

  const assigned = nextTemplateIdRef.current;
  nextTemplateIdRef.current += 1;
  existingIdBySlug.set(slug, assigned);
  return { templateId: assigned, source: "new" };
}

async function uploadImage(params: {
  supabase: ReturnType<typeof createClient>;
  bucket: string;
  storageKey: string;
  imagePath: string;
}): Promise<void> {
  const { supabase, bucket, storageKey, imagePath } = params;
  const fileBuffer = fs.readFileSync(imagePath);

  const { error } = await supabase.storage.from(bucket).upload(storageKey, fileBuffer, {
    contentType: "image/png",
    upsert: true,
  });

  if (error) {
    throw new Error(`Storage upload failed: ${error.message}`);
  }
}

async function upsertTemplate(params: {
  supabase: ReturnType<typeof createClient>;
  payload: Record<string, unknown>;
}): Promise<void> {
  const { supabase, payload } = params;

  const { error } = await supabase.from("meme_templates").upsert(payload, {
    onConflict: "slug",
  });

  if (error) {
    throw new Error(`meme_templates upsert failed: ${error.message}`);
  }
}

function writeReport(reportPath: string, entries: ReportEntry[]): void {
  ensureDir(path.dirname(reportPath));
  fs.writeFileSync(reportPath, JSON.stringify(entries, null, 2), "utf8");
}

async function main(): Promise<void> {
  const options = parseArgs();
  const supabaseUrl =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

  if (!supabaseUrl) {
    throw new Error("Missing SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL");
  }

  if (!serviceRoleKey) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");
  }

  if (!fs.existsSync(options.approvedDir)) {
    throw new Error(`Approved directory does not exist: ${options.approvedDir}`);
  }

  if (!fs.existsSync(options.imagesDir)) {
    throw new Error(`Images directory does not exist: ${options.imagesDir}`);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });
  const existingIdBySlug = await fetchExistingTemplateIdMap({ supabase });
  const nextTemplateIdRef = {
    current: await fetchNextTemplateIdSeed({ supabase }),
  };

  const { records, skippedEntries } = loadApprovedRecords(options);
  const reportEntries: ReportEntry[] = [...skippedEntries];

  let processed = 0;
  let uploaded = 0;
  let upserted = 0;
  let skipped = skippedEntries.length;
  let failed = 0;

  console.log(`Approved folder: ${options.approvedDir}`);
  console.log(`Images folder: ${options.imagesDir}`);
  console.log(`Bucket: ${options.bucket}`);
  console.log(`Storage prefix: ${options.storagePrefix}`);
  console.log(`Dry run: ${options.dryRun}`);
  console.log(`Approved JSON files found: ${records.length + skippedEntries.length}`);

  for (const record of records) {
    const { template } = record;
    const imagePath = findImagePath(options.imagesDir, template);

    if (!imagePath) {
      skipped++;
      reportEntries.push({
        slug: template.slug,
        status: "skipped",
        storageKey: null,
        assigned_template_id: null,
        template_id_source: null,
        dbPayloadSummary: null,
        error: `Missing image for ${template.image_filename}`,
      });
      console.log(`skipped: ${template.slug} (missing image)`);
      continue;
    }

    processed++;

    const storageKey = buildStorageKey(options.storagePrefix, template.slug);
    const { templateId, source } = resolveTemplateId({
      slug: template.slug,
      existingIdBySlug,
      nextTemplateIdRef,
    });
    const payload = buildDbPayload(template, storageKey, templateId);
    const payloadSummary = buildPayloadSummary(payload);

    try {
      if (options.dryRun) {
        console.log(`processed: ${template.slug}`);
        console.log(`  storage_key: ${storageKey}`);
        console.log(`  assigned_template_id: ${templateId} (${source})`);
        console.log(`  db_payload: ${JSON.stringify(payloadSummary)}`);
      } else {
        await uploadImage({
          supabase,
          bucket: options.bucket,
          storageKey,
          imagePath,
        });
        uploaded++;

        await upsertTemplate({
          supabase,
          payload,
        });
        upserted++;

        console.log(`processed: ${template.slug}`);
      }

      reportEntries.push({
        slug: template.slug,
        status: "processed",
        storageKey,
        assigned_template_id: templateId,
        template_id_source: source,
        dbPayloadSummary: payloadSummary,
        error: null,
      });
    } catch (error) {
      failed++;
      const message = error instanceof Error ? error.message : "unknown error";
      reportEntries.push({
        slug: template.slug,
        status: "failed",
        storageKey,
        assigned_template_id: templateId,
        template_id_source: source,
        dbPayloadSummary: payloadSummary,
        error: message,
      });
      console.log(`failed: ${template.slug} (${message})`);
    }
  }

  writeReport(options.reportPath, reportEntries);

  console.log("\nSummary");
  console.log(`Approved JSON files found: ${records.length + skippedEntries.length}`);
  console.log(`Processed: ${processed}`);
  console.log(`Uploaded: ${uploaded}`);
  console.log(`Upserted: ${upserted}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`Report written: ${options.reportPath}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
