-- Some projects may already have `public.generated_memes` without the `user_id` column.
-- Our app + RLS policies expect `user_id` to exist.

-- Ensure table exists first.
create table if not exists public.generated_memes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  template_id text,
  top_text text,
  bottom_text text,
  title text,
  format text,
  image_url text,
  created_at timestamptz default now()
);

-- If the table already existed without `user_id`, add it.
alter table public.generated_memes
  add column if not exists user_id uuid;

-- Enable RLS.
alter table public.generated_memes enable row level security;

-- Recreate policies (idempotent).
drop policy if exists "Users can read own memes" on public.generated_memes;
drop policy if exists "Users can insert own memes" on public.generated_memes;

create policy "Users can read own memes"
  on public.generated_memes for select
  using (auth.uid() = user_id);

create policy "Users can insert own memes"
  on public.generated_memes for insert
  with check (auth.uid() = user_id);

