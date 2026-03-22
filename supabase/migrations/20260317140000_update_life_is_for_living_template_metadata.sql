-- Refine narrative metadata for video template life-is-for-living:
-- anchor copy to quiet home-grounded comfort (warmth, light, calm, drafts, settling in)
-- and discourage generic inspirational / life-lesson lines.

update public.meme_templates
set
  emotion_style =
    'Calm realization and quiet gratitude about everyday life at home—comfort, warmth, stillness, light, feeling settled. Never generic inspiration, motivational-quote tone, or broad sentimental slogans.',
  context_fit =
    'Moments inside a real home: rooms warming up, morning light, silence after noise, drafts gone, outside staying outside, the house feeling finished or peaceful. Must feel tied to living in a space, not abstract “life wisdom.”',
  business_fit =
    'Works for home improvement, glazing, windows, insulation, and comfort-focused brands: imply subtle lifestyle benefits (comfort, calm, light control, quiet) without hard-sell ad copy, specs, or CTAs.',
  -- promotion_fit is boolean in this schema; promo tone lives in template_logic instead.
  template_logic =
    'Write one gentle line that captures a quiet, emotionally resonant everyday moment clearly grounded in the lived experience of home—not a generic life lesson, motivational quote, or abstract inspiration. Prefer concrete, home-specific sensations and small realizations: warmth that finally holds, drafts you stop noticing, outside noise fading, morning light landing right, stillness, calm, peace, or feeling settled. The tone is soft appreciation of daily life at home and subtle “this small improvement changed how the day feels,” appropriate for brands like windows or home improvement without naming products, prices, or sounding like an ad. Avoid vague wholesome copy, broad “life is…” wisdom, philosophical one-liners, slogans, CTAs, or lines that could equally fit candles, coffee, travel, or wellness brands. Do not write generic inspirational language such as “Sometimes the simplest moments mean the most” or “The best moments are often the quietest.” If promotion context exists, keep any referenced facts exact; otherwise stay on emotionally grounded home moments—do not turn the line into an offer, slogan, or call to action.',
  example_output = 'When the room finally stays warm all evening'
where slug = 'life-is-for-living';
