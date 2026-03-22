-- Align narrative metadata for we-did-it with relief / triumph / payoff after struggle—not a bland upgrade announcement.

update public.meme_templates
set
  slot_1_role =
    'Celebration after a struggle: relief, triumph, release—implying a frustrating “before” is finally over; not a neutral product update or ad headline',
  meme_mechanic =
    'We Did It: emotional payoff after enduring annoyance, discomfort, or delay. The line should feel like victory, relief, or escape—not describing a purchase or install as a dry fact.',
  emotion_style =
    'Triumphant, relieved, celebratory, or giddy release—energy of “we made it through” or “we finally fixed it.” Warm and human, not corporate or brochure-like.',
  context_fit =
    'A moment of winning after putting up with something bad: drafts, cold, noise, hassle, waiting, or a problem that dragged on. The listener should feel the exhale, not read a status report.',
  business_fit =
    'Any brand can map pain-to-payoff (comfort, quiet, warmth, fixing a long-running annoyance). Focus on the emotional after-state and implied before-struggle; avoid naming SKUs, timelines, or “we upgraded” as the whole joke.',
  -- promotion_fit is boolean in some schemas; promo tone lives in template_logic instead.
  template_logic =
    'Write like the punchline of a “we did it” meme: celebration after a struggle, relief after frustration, triumph or release when a bad situation finally ends. Imply a before-and-after emotional shift—survived it, escaped it, finally fixed it, winter lost, drafts gone, peace returns. Prefer concrete sensory or situational payoff (warmth, silence, comfort, the problem stopping) over naming the transaction. Do not write generic homeowner updates, plain announcements (“we upgraded…”, “we installed…”), mild brand-safe descriptions, or flat promotional copy. Avoid neutral lines that could be a social post caption about a renovation without emotional heat. The humor and heart come from finally reaching the better state, not from cataloguing what was bought.',
  example_output = 'The drafts are finally gone.'
where slug = 'we-did-it';
