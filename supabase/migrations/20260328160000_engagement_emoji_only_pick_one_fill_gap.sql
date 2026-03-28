-- Engagement templates: emoji_only, pick_one, fill_gap (engagement_text family).

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
  'emoji-only',
  'Emoji Only',
  'engagement_text',
  'image',
  'png',
  'emoji_only',
  true,
  99125,
  'topic',
  48,
  1,
  null,
  null,
  null,
  'Plain white square. Renderer shows: Describe [top_text] using emojis only. Generate ONLY a short relatable topic in top_text (no emojis, no instructions, no the word emoji). bottom_text must be null.',
  'this week at work',
  1080,
  1080,
  null,
  'engagement',
  'emoji_reaction_topic',
  'Playful, low-friction, comment-native',
  'Topics people can answer in emoji threads.',
  'Light engagement for any audience.',
  false
where not exists (
  select 1
  from public.meme_templates mt
  where mt.slug = 'emoji-only'
     or mt.template_id = 99125
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
  'pick-one',
  'Pick One',
  'engagement_text',
  'image',
  'png',
  'pick_one',
  true,
  99126,
  'option A',
  55,
  1,
  'option B',
  55,
  1,
  'Plain white square. Renderer shows Pick one: then top_text then bottom_text. Generate two contrasting meaningful options (short labels, trade-off energy). No punctuation in either slot.',
  'Deep work blocks / Always-on Slack',
  1080,
  1080,
  null,
  'engagement',
  'forced_choice_two_options',
  'Decision-friendly, debate-light',
  'Two plausible paths where the audience must pick a side.',
  'Workflow, lifestyle, and brand-adjacent dilemmas.',
  false
where not exists (
  select 1
  from public.meme_templates mt
  where mt.slug = 'pick-one'
     or mt.template_id = 99126
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
  'fill-the-gap',
  'Fill the Gap',
  'engagement_text',
  'image',
  'png',
  'fill_gap',
  true,
  99127,
  'statement',
  72,
  1,
  null,
  null,
  null,
  'Plain white square. top_text must be one line containing exactly the six-underscore blank ______ (e.g. Success = consistency + ______). Insightful conceptual fill-in, not a joke or question. bottom_text must be null.',
  'Success = consistency + ______',
  1080,
  1080,
  null,
  'engagement',
  'fill_in_the_blank_concept',
  'Thoughtful, comment-inviting',
  'One-liner frameworks with a missing piece.',
  'Operators and creators who like clever completions.',
  false
where not exists (
  select 1
  from public.meme_templates mt
  where mt.slug = 'fill-the-gap'
     or mt.template_id = 99127
);
