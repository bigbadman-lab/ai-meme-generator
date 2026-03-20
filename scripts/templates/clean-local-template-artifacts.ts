import fs from "fs";
import path from "path";

/**
 * Examples:
 * pnpm tsx scripts/templates/clean-local-template-artifacts.ts --all=true --dry-run=true
 * pnpm tsx scripts/templates/clean-local-template-artifacts.ts --previews=true --dry-run=false
 * pnpm tsx scripts/templates/clean-local-template-artifacts.ts --drafts=true --approved=true --dry-run=false
 * pnpm tsx scripts/templates/clean-local-template-artifacts.ts --all=true --dry-run=false
 */

type CliOptions = {
  previews: boolean;
  drafts: boolean;
  approved: boolean;
  all: boolean;
  dryRun: boolean;
};

type FolderResult = {
  folderKey: "previews" | "drafts" | "approved";
  folderPath: string;
  filesFound: number;
  filesDeleted: number;
  filesSkipped: number;
};

const ALLOWED_FOLDERS = {
  previews: "./templates/previews",
  drafts: "./templates/drafts",
  approved: "./templates/approved",
} as const;

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

function parseArgs(): CliOptions {
  return {
    previews: parseBooleanArg(getArg("previews"), false),
    drafts: parseBooleanArg(getArg("drafts"), false),
    approved: parseBooleanArg(getArg("approved"), false),
    all: parseBooleanArg(getArg("all"), false),
    dryRun: parseBooleanArg(getArg("dry-run"), false),
  };
}

function getSelectedFolderKeys(options: CliOptions): Array<keyof typeof ALLOWED_FOLDERS> {
  if (options.all) {
    return ["previews", "drafts", "approved"];
  }

  const keys: Array<keyof typeof ALLOWED_FOLDERS> = [];
  if (options.previews) keys.push("previews");
  if (options.drafts) keys.push("drafts");
  if (options.approved) keys.push("approved");
  return keys;
}

function resolveSafeFolderPath(folderKey: keyof typeof ALLOWED_FOLDERS): string {
  const configuredRelativePath = ALLOWED_FOLDERS[folderKey];
  const configuredAbsolutePath = path.resolve(configuredRelativePath);

  const expectedAbsolutePath = path.resolve(ALLOWED_FOLDERS[folderKey]);
  if (configuredAbsolutePath !== expectedAbsolutePath) {
    throw new Error(`Unsafe folder path resolution for "${folderKey}"`);
  }

  return configuredAbsolutePath;
}

function cleanFolder(
  folderKey: keyof typeof ALLOWED_FOLDERS,
  folderPath: string,
  dryRun: boolean
): FolderResult {
  const result: FolderResult = {
    folderKey,
    folderPath,
    filesFound: 0,
    filesDeleted: 0,
    filesSkipped: 0,
  };

  if (!fs.existsSync(folderPath)) {
    console.log(`- ${folderKey}: folder not found, skipping (${folderPath})`);
    return result;
  }

  const entries = fs.readdirSync(folderPath, { withFileTypes: true });

  for (const entry of entries) {
    // Ignore hidden/system files safely.
    if (entry.name.startsWith(".")) {
      result.filesSkipped++;
      continue;
    }

    const entryPath = path.join(folderPath, entry.name);

    if (entry.isDirectory()) {
      result.filesSkipped++;
      console.log(`  skipped directory: ${entryPath}`);
      continue;
    }

    if (!entry.isFile()) {
      result.filesSkipped++;
      console.log(`  skipped non-file entry: ${entryPath}`);
      continue;
    }

    result.filesFound++;

    if (dryRun) {
      console.log(`  would delete: ${entryPath}`);
      continue;
    }

    fs.unlinkSync(entryPath);
    result.filesDeleted++;
    console.log(`  deleted: ${entryPath}`);
  }

  return result;
}

function main(): void {
  const options = parseArgs();
  const selectedFolderKeys = getSelectedFolderKeys(options);

  if (selectedFolderKeys.length === 0) {
    throw new Error(
      "No cleanup target selected. Use --all=true or one/more of --previews=true --drafts=true --approved=true."
    );
  }

  console.log("Template artifact cleanup");
  console.log(`Dry run: ${options.dryRun}`);
  console.log(`Targets: ${selectedFolderKeys.join(", ")}`);

  const folderResults: FolderResult[] = [];
  for (const folderKey of selectedFolderKeys) {
    const folderPath = resolveSafeFolderPath(folderKey);
    console.log(`\nProcessing ${folderKey}: ${folderPath}`);
    folderResults.push(cleanFolder(folderKey, folderPath, options.dryRun));
  }

  const summary = folderResults.reduce(
    (acc, item) => {
      acc.foldersProcessed += 1;
      acc.filesFound += item.filesFound;
      acc.filesDeleted += item.filesDeleted;
      acc.filesSkipped += item.filesSkipped;
      return acc;
    },
    { foldersProcessed: 0, filesFound: 0, filesDeleted: 0, filesSkipped: 0 }
  );

  console.log("\nSummary");
  console.log(`Folders processed: ${summary.foldersProcessed}`);
  console.log(`Files found: ${summary.filesFound}`);
  console.log(`Files deleted: ${summary.filesDeleted}`);
  console.log(`Files skipped: ${summary.filesSkipped}`);
  console.log(`Dry run: ${options.dryRun}`);
}

main();
