-- Wow Doge: custom square_meme overlay with phrase pills (slug-driven generation + renderer).
-- Base image must exist in storage at the path used by image_filename (bucket: meme-templates).

insert into public.meme_templates (
  slug,
  template_name,
  template_family,
  asset_type,
  media_format,
  text_layout_type,
  is_active,
  template_id,
  slot_1_role,
  slot_1_max_chars,
  slot_1_max_lines,
  slot_2_role,
  slot_2_max_chars,
  slot_2_max_lines,
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
  'wow-doge',
  'Wow Doge',
  'square_meme',
  'image',
  'png',
  'overlay',
  true,
  99128,
  'Custom wow-doge layout: phrases live in variant_metadata.phrases (not standard top/bottom captions).',
  8,
  1,
  null,
  null,
  null,
  'WOW DOGE (custom): Output is NOT normal meme captions. Generate exactly 4–5 ultra-short doge-style phrases for variant_metadata.phrases. Each phrase is 1–2 words only. First word must be one of: wow, much, such, very, so (optional: go when it fits naturally). Second word is a niche term from the user''s business/topic. No sentences, no punctuation, no duplicates, playful internet-native tone. Renderer draws each phrase in a colored pill on the base image.',
  'wow pipes · much leak · such boiler · very drainage · so repair',
  1080,
  1080,
  'public/meme-templates/doge-wow.png',
  'custom_overlay',
  'wow_doge_phrases',
  'Playful, absurdist-label doge energy',
  'Floating label comedy around a single topic — not narrative captions.',
  'Niche operators, trades, creators, startups — anything with concrete nouns to label.',
  false
where not exists (
  select 1 from public.meme_templates mt where mt.slug = 'wow-doge' or mt.template_id = 99128
);
