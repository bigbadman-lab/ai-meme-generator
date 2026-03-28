-- Engagement templates: agree_disagree + hot_take (text_layout_type-driven, engagement_text family).
-- Idempotent inserts.

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
  'agree-or-disagree',
  'Agree or Disagree',
  'engagement_text',
  'image',
  'png',
  'agree_disagree',
  true,
  99123,
  'debatable opinion statement',
  120,
  1,
  null,
  null,
  null,
  'Plain white square. Renderer shows top_text as the statement, then a fixed line "Agree or disagree?". Generate ONLY a short, opinion-led, debatable statement in top_text (no questions, no "agree or disagree" phrasing, no audience prompts). Slightly provocative but safe. bottom_text must be null.',
  'Working from home is better than the office',
  1080,
  1080,
  null,
  'engagement',
  'agree_or_disagree_debate',
  'Opinion-led, debate-friendly, socially native',
  'Takes that split the room and invite comments without being extreme.',
  'Brand-safe angles on work, habits, tools, and audience truths.',
  false
where not exists (
  select 1
  from public.meme_templates mt
  where mt.slug = 'agree-or-disagree'
     or mt.template_id = 99123
);

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
  'hot-take',
  'Hot Take',
  'engagement_text',
  'image',
  'png',
  'hot_take',
  true,
  99124,
  'punchy opinion statement',
  120,
  1,
  null,
  null,
  null,
  'Plain white square. Renderer shows a fixed header "Hot take:" then top_text. Generate ONLY a punchy, internet-native opinion in top_text (stronger tone than agree/disagree). No "hot take" wording, no questions, no meta setup. bottom_text must be null.',
  'Morning meetings are a waste of time',
  1080,
  1080,
  null,
  'engagement',
  'hot_take_opinion',
  'Bold, scroll-stopping, still brand-safe',
  'Strong takes that feel like real social posts, not corporate copy.',
  'Creators, operators, and audience-led topics.',
  false
where not exists (
  select 1
  from public.meme_templates mt
  where mt.slug = 'hot-take'
     or mt.template_id = 99124
);
