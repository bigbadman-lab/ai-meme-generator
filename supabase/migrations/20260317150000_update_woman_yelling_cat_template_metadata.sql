-- Align narrative metadata for woman-yelling-cat with the real meme mechanic:
-- left = accusation / yelling / blame / demand; right = blamed target or absurd counterpoint.

update public.meme_templates
set
  slot_1_role =
    'Angry accusation, blame, shout, demand, or dramatic complaint (the yelling woman side)',
  slot_2_role =
    'Blamed target, scapegoat, contradiction, excuse, or absurd counterpoint (the cat side)',
  meme_mechanic =
    'Confrontation meme: Slot 1 (left) is intense accusation, frustration, blame, shouting, or demanding; Slot 2 (right) is the thing being blamed, denied, contradicted, or an absurd response. Humor = mismatch, exaggerated blame, comic tension—not passive observation.',
  emotion_style =
    'Angry-comic tension: yelling, calling out, demanding an explanation, dramatic complaint aimed at a target. The right side deflates, contradicts, or takes the blame. Never mild, wistful, or purely promotional.',
  context_fit =
    'Two-panel setup: someone confronting something. Left sounds like a shout, rant, or blame; right is the accused party, scapegoat, excuse, or ridiculous answer. Must read as directed confrontation, not a solo “when you…” wish.',
  business_fit =
    'Works for any brand where you can aim blame or frustration at a concrete annoyance (old kit, bad habit, competitor behavior, user pain) and label it on the right—still a confrontation, not bland taglines.',
  template_logic =
    'This template is Woman Yelling At Cat: a fight on the left and the target or punchline on the right. Slot 1 must sound like yelling, blaming, calling out, angrily demanding, or a dramatic complaint aimed at something—caps/shout energy is OK when it fits the meme. Slot 2 must be what is being blamed, the ridiculous excuse, the contradiction, or the smug/absurd counterpoint (often shorter, like a label for the “cat”). The joke needs visible tension between the two sides. Do not write passive desire lines, mild observations, generic “when you want…” wishes with no target, flat brand slogans, or single-slot filler that ignores the confrontation. Avoid lines that could work as a standalone tweet with no accused party on the right. If promotion context exists, weave it into blame vs target—never replace the mechanic with abstract promo copy.',
  example_output =
    'Left: WHY IS THIS ROOM STILL FREEZING — Right: single glazing from 1998'
where slug = 'woman-yelling-cat';
