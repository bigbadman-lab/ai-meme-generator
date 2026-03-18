-- Fix onboarding_drafts RLS to avoid permission issues reading `auth.users`.
-- We match drafts by the authenticated user's JWT email claim instead.

drop policy if exists "Users can read own draft by uid email" on public.onboarding_drafts;
drop policy if exists "Users can delete own draft by uid email" on public.onboarding_drafts;

drop policy if exists "Users can read own draft by email" on public.onboarding_drafts;
drop policy if exists "Users can delete own draft by email" on public.onboarding_drafts;

create policy "Users can read own draft by email"
  on public.onboarding_drafts for select
  using (lower(email) = lower(auth.jwt() ->> 'email'));

create policy "Users can delete own draft by email"
  on public.onboarding_drafts for delete
  using (lower(email) = lower(auth.jwt() ->> 'email'));

