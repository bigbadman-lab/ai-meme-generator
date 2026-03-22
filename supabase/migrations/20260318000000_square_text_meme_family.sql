-- V1 square_text meme family: plain white 1080×1080 text cards (no base image asset).

comment on column public.meme_templates.template_family is
  'square_meme | vertical_slideshow | square_text — drives which generation pipeline loads the row.';

-- square_text rows have no template image in storage; generation skips download when template_family = square_text.
alter table public.meme_templates
  alter column image_filename drop not null;

-- Seed one active template so the pipeline is testable (idempotent).
-- Some deployments enforce NOT NULL on many semantic columns; we set neutral placeholders
-- (the LLM uses template_logic / example_output; meme_mechanic 'none' maps to no extra prompt block).
-- If promotion_fit is boolean in your DB, keep `false`; if it is text, change to '' in a forked migration.
insert into public.meme_templates (
  slug,
  template_name,
  template_family,
  asset_type,
  text_layout_type,
  is_active,
  template_id,
  slot_1_role,
  slot_1_max_chars,
  slot_1_max_lines,
  template_logic,
  example_output,
  canvas_width,
  canvas_height,
  image_filename,
  pattern_type,
  meme_mechanic,
  emotion_style,
  context_fit,
  business_fit,
  promotion_fit
)
select
  'square-text-v1',
  'Square text (V1)',
  'square_text',
  'image',
  'top_caption',
  true,
  99001,
  'Primary message for the plain white square text card.',
  220,
  8,
  'Plain white square, black text only—no background photo. Write one strong, scroll-stopping message for the brand. The line may wrap across several lines; keep it readable and punchy.',
  'Your weekend plans vs Monday morning',
  1080,
  1080,
  null,
  'text_card',
  'none',
  'neutral',
  'general',
  'general',
  false
where not exists (
  select 1 from public.meme_templates mt where mt.slug = 'square-text-v1'
);
