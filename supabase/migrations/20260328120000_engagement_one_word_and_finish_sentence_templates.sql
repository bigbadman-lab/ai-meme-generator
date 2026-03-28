-- =============================================================================
-- SECTION A (environment consistency): finish_sentence engagement template
-- =============================================================================
-- Code expects template_family = engagement_text + text_layout_type = finish_sentence.
-- Idempotent insert so fresh environments match production capabilities.

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
  'finish-sentence',
  'Finish Sentence',
  'engagement_text',
  'image',
  'png',
  'finish_sentence',
  true,
  99020,
  'keyword / annoyance phrase',
  60,
  1,
  null,
  null,
  null,
  'Plain white square. Renderer shows "Finish this sentence." and "I hate [keyword] because". Generate ONLY the keyword phrase for the bracket (2–4 words, noun-style, no "I hate" or "because"). bottom_text must be null.',
  'no-show bookings',
  1080,
  1080,
  null,
  'engagement',
  'finish_the_sentence_keyword',
  'Playful, socially-native, comment-triggering',
  'A tight frustration or niche annoyance that invites people to pile on in comments.',
  'Works when the audience shares recurring pains or habits.',
  false
where not exists (
  select 1
  from public.meme_templates mt
  where mt.slug = 'finish-sentence'
     or mt.template_id = 99020
);

-- =============================================================================
-- SECTION B (One Word feature): one_word engagement template
-- =============================================================================

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
  'one-word',
  'One Word',
  'engagement_text',
  'image',
  'png',
  'one_word',
  true,
  99122,
  'topic phrase (for describe-in-one-word prompt)',
  48,
  1,
  null,
  null,
  null,
  'Plain white square. Renderer shows: Describe [top_text] in ONE word. Generate ONLY a short topic phrase for top_text (the thing people comment one word about). No instructions, no answer, no quotes, no questions. bottom_text must be null.',
  'Monday mornings',
  1080,
  1080,
  null,
  'engagement',
  'describe_one_word',
  'Playful, low-effort, comment-native',
  'Quick topical hook that invites single-word replies.',
  'Audience-led threads, light engagement, brand-adjacent topics.',
  false
where not exists (
  select 1
  from public.meme_templates mt
  where mt.slug = 'one-word'
     or mt.template_id = 99122
);
