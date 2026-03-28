-- Fix: Older engagement migrations used template_ids 99022–99027. If those IDs were already
-- taken by unrelated templates, inserts were skipped (WHERE NOT EXISTS ... OR template_id = …).
-- This migration inserts the missing engagement rows using slug-only guards and a dedicated
-- id block 99122–99127. Does not update or delete existing unrelated rows.

-- one_word (was 99022 → 99122)
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
);

-- agree_disagree (was 99023 → 99123)
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
);

-- hot_take (was 99024 → 99124)
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
);

-- emoji_only (was 99025 → 99125)
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
);

-- pick_one (was 99026 → 99126)
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
);

-- fill_gap (was 99027 → 99127)
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
);
