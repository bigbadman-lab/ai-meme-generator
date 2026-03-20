# Template Onboarding Pipeline (Square Memes)

## Overview
This pipeline onboards new **1080x1080 square meme templates** from a local PNG folder into the live system in a repeatable way.

### Input
- A local folder of 1080x1080 PNG templates (grouped by preset family).

### Output
- Draft template JSONs and preview overlays.
- LLM-enriched semantic metadata.
- Approved templates published to:
  - Supabase Storage (`meme-templates` bucket, `square/<slug>.png`)
  - `meme_templates` table (kept inactive by default).

---

## Folder Structure

```text
/Users/alexattinger/Desktop/New_templates/<preset-folder>/*.png

templates/
  drafts/
  previews/
  approved/
  reports/
```

Working example preset batch:
- `/Users/alexattinger/Desktop/New_templates/top-caption-standard`

---

## Preset-Based Batching
- Group templates by **preset family** before processing.
- Each batch should be **visually similar** so one preset can initialize geometry/style safely.
- First working batch used:
  - preset: `this-is-fine`
  - family: `top-caption-standard`

---

## Step-by-Step Workflow

### 1) Generate Drafts and Previews

```bash
pnpm tsx scripts/templates/create-drafts-from-preset.ts \
  --input="/Users/alexattinger/Desktop/New_templates/top-caption-standard" \
  --preset="this-is-fine" \
  --drafts="./templates/drafts" \
  --previews="./templates/previews"
```

What this stage does:
- Validates image dimensions.
- Creates slug + template name from filename.
- Applies preset layout/style defaults.
- Writes draft JSON files to `templates/drafts/`.
- Writes visual preview overlays to `templates/previews/`.

### 2) Review Previews
Check:
- Text box alignment.
- Visual fit of slot areas.
- Consistency across the batch.

If alignment is off, fix before enrichment/publish.

### 3) Enrich Drafts with LLM (Dry Run First)

Dry run:

```bash
pnpm tsx scripts/templates/enrich-drafts-with-llm.ts \
  --drafts="./templates/drafts" \
  --images="/Users/alexattinger/Desktop/New_templates/top-caption-standard" \
  --model="gpt-4.1-mini" \
  --dry-run=true
```

Real run:

```bash
pnpm tsx scripts/templates/enrich-drafts-with-llm.ts \
  --drafts="./templates/drafts" \
  --images="/Users/alexattinger/Desktop/New_templates/top-caption-standard" \
  --model="gpt-4.1-mini" \
  --dry-run=false
```

Semantic fields overwritten by this stage:
- `pattern_type`
- `meme_mechanic`
- `template_logic`
- `emotion_style`
- `slot_1_role`
- `example_output`

All layout/render/preset fields stay untouched.

### 4) Review Enriched Drafts
- Inspect `templates/reports/semantic-enrichment-report.json`.
- Review any `low_specificity_warning` values.
- Manually improve weak/generic metadata where needed.

### 5) Move Approved Drafts

```bash
mkdir -p templates/approved
cp templates/drafts/*.json templates/approved/
```

### 6) Publish Approved Templates to Supabase

Dry run:

```bash
pnpm tsx scripts/templates/publish-approved-to-supabase.ts \
  --approved="./templates/approved" \
  --images="/Users/alexattinger/Desktop/New_templates/top-caption-standard" \
  --bucket="meme-templates" \
  --storage-prefix="square" \
  --dry-run=true
```

Real run:

```bash
pnpm tsx scripts/templates/publish-approved-to-supabase.ts \
  --approved="./templates/approved" \
  --images="/Users/alexattinger/Desktop/New_templates/top-caption-standard" \
  --bucket="meme-templates" \
  --storage-prefix="square" \
  --dry-run=false
```

What this stage does:
- Uploads PNGs to storage key: `square/<slug>.png`.
- Normalizes `image_filename` in DB payload to that storage key.
- Assigns/reuses `template_id`:
  - reuses existing `template_id` if slug exists
  - assigns new sequential `template_id` for new slugs
- Upserts into `meme_templates` with slug conflict behavior.
- Forces `is_active = false` on publish.

### 7) Activate Templates
Global activation:

```sql
UPDATE meme_templates
SET is_active = true;
```

Safer scoped activation:

```sql
UPDATE meme_templates
SET is_active = true
WHERE image_filename LIKE 'square/%';
```

---

## Required Environment Variables

Required for this pipeline:
- `OPENAI_API_KEY`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Important:
- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are **not enough** for publishing.
- Publishing needs the **service role key**.

---

## Common Issues and Fixes

### A) `tsx` command not found
Install it:

```bash
pnpm add -D tsx
```

### B) Missing `OPENAI_API_KEY`
Set/export it in your shell or load from your shell config before running enrichment.

### C) Missing `SUPABASE_SERVICE_ROLE_KEY`
Get it from Supabase dashboard:
- **Settings -> API**

### D) `template_id` null violation
Error:
- `null value in column "template_id" ... violates not-null constraint`

Fix:
- Publisher now assigns/reuses `template_id` before upsert.

### E) `duplicate key value violates unique constraint "meme_templates_pkey"`
Likely cause:
- Out-of-sync ID sequence.

Fix SQL:

```sql
SELECT setval(
  pg_get_serial_sequence('public.meme_templates', 'id'),
  COALESCE((SELECT MAX(id) FROM public.meme_templates), 1),
  true
);
```

### F) Images not visible in storage bucket root
Expected behavior:
- Images are uploaded under the `square/` prefix inside `meme-templates`.

---

## Best Practices
- Always run **dry-run** first.
- Always review previews before enrichment and publish.
- Always inspect semantic enrichment report outputs.
- Manually correct weak/generic metadata before publish.
- Keep new templates inactive until ready.
- Use slug-based storage keys (`square/<slug>.png`).
- Batch templates by preset family.

---

## Current Script Responsibilities

### `create-drafts-from-preset.ts`
- Stage 1 draft generation from PNG batch + preset.
- Creates draft JSON + visual preview overlays.

### `enrich-drafts-with-llm.ts`
- Stage 2 semantic enrichment only.
- Updates six semantic fields via LLM.
- Produces semantic report/warnings.

### `publish-approved-to-supabase.ts`
- Stage 3 publish only.
- Uploads assets to storage, normalizes `image_filename`, assigns/reuses `template_id`, upserts `meme_templates`, forces inactive state.

---

## Next Improvements
- Add an automated QA render/test stage.
- Add a preset registry/config file.
- Add draft/approved promotion tooling (instead of manual copy).
- Add template scoring and auto-disable for poor performers.
- Add DB-driven preset management.

