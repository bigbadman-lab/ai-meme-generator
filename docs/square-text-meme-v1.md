# Square text meme (V1)

## Internal identifiers

- **Template family** (`meme_templates.template_family`): `square_text`
- **Dashboard / variant metadata** (`variant_metadata.output_format`): `square_text`
- **Generation option** (`generateMockMemes` / create flow): `outputFormat: "square_text"`

## LLM writing contract

Square text uses **`template_family === "square_text"`** in `lib/actions/memes.ts`: a dedicated prompt block (`getSquareTextFamilyPromptSection`, `getSquareTextSlotGuidance`) plus suppressed generic **top_caption** “setup for reaction image” guidance so copy is **standalone, meme-native, and complete** on the blank card.

## Behaviour

- 1080×1080 **PNG**, **white** background, **black Arial** (bold weight in renderer), centered wrapped text.
- **No** base image or video asset; `image_filename` may be null.
- Uses the same **LLM JSON contract** as square image memes (`title`, `top_text`, `bottom_text`, `post_caption`) and existing slot validation.
- **Render path**: `renderer/renderSquareTextMeme.ts` (`renderSquareTextMemePng`), invoked from `lib/actions/memes.ts` when `template.template_family === "square_text"` (before image/video asset branches).

## Minimum template row (reference)

| Field | Example |
|--------|---------|
| `slug` | `square-text-v1` |
| `template_family` | `square_text` |
| `asset_type` | `image` (storage metadata only; no file required) |
| `text_layout_type` | `top_caption` |
| `is_active` | `true` |
| `template_id` | stable numeric id (e.g. `99001`) |
| `slot_1_role` | non-empty (required by loader) |
| `slot_1_max_chars` / `slot_1_max_lines` | content limits |
| `template_logic` / `example_output` | LLM guidance |
| `pattern_type` | Semantic label (e.g. `text_card`); required if your DB enforces NOT NULL on this column |

Optional **two-slot**: set `slot_2_role`, `slot_2_max_chars`, `slot_2_max_lines`, and layout fields if you extend a template; renderer stacks block 2 under block 1.

## Migration

Apply `supabase/migrations/20260318000000_square_text_meme_family.sql`: updates the `template_family` comment, **`alter`s `image_filename` to allow NULL** (required for asset-less templates), then seeds `square-text-v1` if missing.

### If inserts keep failing on NOT NULL columns

Your `meme_templates` schema may differ (extra required columns). **Options:**

1. **Keep extending the seed `INSERT`** with placeholders for each required column (current approach).
2. **Relax constraints** for optional semantics: `alter table public.meme_templates alter column <col> drop not null;` (only where appropriate).
3. **Duplicate a working row** in the SQL editor: `insert into meme_templates select ... from meme_templates where slug = '…'` with overrides for `slug`, `template_family`, `template_id`, `image_filename`, etc.

If `promotion_fit` is **text** in your DB (not boolean), replace `false` in the migration with `''` or `'general'`.

## Phase 2 ideas

- Prompt tuning per template
- Stronger wrap metrics (pixel-based) if needed
- Additional `square_text` templates in `meme_templates`
