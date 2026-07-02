-- Faithonomics LMS external data basis for GitHub Pages.
-- Run this in the Supabase SQL editor for the project you want to use.
-- Legacy note: the maintained setup path is now supabase/schema.sql plus
-- the generated supabase/seed.sql file from npm run db:seed:sql.

create extension if not exists pgcrypto;

create table if not exists public.classroom_records (
  id uuid primary key default gen_random_uuid(),
  collection text not null,
  record_id text not null,
  payload jsonb not null,
  course_id text,
  module_id text,
  lesson_id text,
  activity_id text,
  question_id text,
  member_id text,
  enrolment_id text,
  post_id text,
  submission_id text,
  status text,
  sequence integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (collection, record_id)
);

create or replace function public.set_classroom_records_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_classroom_records_updated_at on public.classroom_records;
create trigger set_classroom_records_updated_at
before update on public.classroom_records
for each row execute function public.set_classroom_records_updated_at();

create index if not exists classroom_records_collection_idx on public.classroom_records (collection);
create index if not exists classroom_records_course_idx on public.classroom_records (course_id);
create index if not exists classroom_records_lesson_idx on public.classroom_records (lesson_id);
create index if not exists classroom_records_activity_idx on public.classroom_records (activity_id);
create index if not exists classroom_records_member_idx on public.classroom_records (member_id);
create index if not exists classroom_records_enrolment_idx on public.classroom_records (enrolment_id);
create index if not exists classroom_records_post_idx on public.classroom_records (post_id);

alter table public.classroom_records enable row level security;

-- Public read lets the static GitHub Pages LMS fetch published curriculum and demo discussion data.
-- Tighten this once Supabase Auth is added.
drop policy if exists "Public classroom read" on public.classroom_records;
create policy "Public classroom read"
on public.classroom_records
for select
using (true);

-- Public insert/update is useful for prototype progress, reflections, and forum posts from GitHub Pages.
-- For production, replace this with authenticated policies scoped to auth.uid().
drop policy if exists "Prototype classroom write" on public.classroom_records;
create policy "Prototype classroom write"
on public.classroom_records
for insert
with check (collection in (
  'enrolments',
  'lessonProgress',
  'activityCompletions',
  'quizAttempts',
  'submissions',
  'discussionPosts',
  'discussionReplies',
  'feedback',
  'aiUsage',
  'auditLogs'
));

drop policy if exists "Prototype classroom update" on public.classroom_records;
create policy "Prototype classroom update"
on public.classroom_records
for update
using (collection in (
  'lessonProgress',
  'activityCompletions',
  'submissions',
  'discussionPosts',
  'discussionReplies',
  'feedback',
  'aiUsage',
  'auditLogs'
))
with check (collection in (
  'lessonProgress',
  'activityCompletions',
  'submissions',
  'discussionPosts',
  'discussionReplies',
  'feedback',
  'aiUsage',
  'auditLogs'
));
