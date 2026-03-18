-- Backfill generated_memes.template_id from meme_templates so existing rows
-- point to the correct template (for rendering / display).
-- Match by format = template_name first, then format = slug for any still missing.
-- Uses the same template identifier as the app: template_id, then id::text, then slug.
-- Note: This does not populate image_url; re-run meme generation or a render backfill for that.

-- 1) Set template_id where format matches meme_templates.template_name
update public.generated_memes g
set template_id = mt.resolved_id
from (
  select
    coalesce(
      nullif(trim(template_id::text), ''),
      id::text,
      nullif(trim(slug), '')
    ) as resolved_id,
    nullif(trim(template_name), '') as name
  from public.meme_templates
) mt
where (g.template_id is null or g.template_id = '')
  and g.format is not null
  and mt.name is not null
  and g.format = mt.name;

-- 2) Set template_id where still missing and format matches meme_templates.slug
update public.generated_memes g
set template_id = mt.resolved_id
from (
  select
    coalesce(
      nullif(trim(template_id::text), ''),
      id::text,
      nullif(trim(slug), '')
    ) as resolved_id,
    nullif(trim(slug), '') as slug_val
  from public.meme_templates
) mt
where (g.template_id is null or g.template_id = '')
  and g.format is not null
  and mt.slug_val is not null
  and g.format = mt.slug_val;
