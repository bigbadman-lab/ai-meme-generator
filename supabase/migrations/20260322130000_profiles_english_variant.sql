-- Global English spelling/phrasing for generation prompts (nullable = app default en-GB).

alter table public.profiles
  add column if not exists english_variant text;

alter table public.profiles
  drop constraint if exists profiles_english_variant_check;

alter table public.profiles
  add constraint profiles_english_variant_check
    check (english_variant is null or english_variant in ('en-GB', 'en-US'));

comment on column public.profiles.english_variant is
  'en-GB | en-US; NULL = treat as en-GB in app.';
