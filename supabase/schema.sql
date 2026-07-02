-- Faithonomics live classroom database for the GitHub Pages pilot.
--
-- Run this in the Supabase SQL editor before importing seed.sql.
-- This schema matches src/adapters/supabase/supabaseRestRepository.ts.
--
-- Important: the anon policies below allow browser-based reads and writes.
-- That is suitable for a pilot/demo static site, but real learner data should
-- be protected with Supabase Auth or a backend API before production use.

create table if not exists public.classroom_records (
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
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint classroom_records_pk primary key (collection, record_id),
  constraint classroom_records_payload_object check (jsonb_typeof(payload) = 'object')
);

create index if not exists classroom_records_collection_idx
  on public.classroom_records (collection);

create index if not exists classroom_records_course_idx
  on public.classroom_records (collection, course_id);

create index if not exists classroom_records_module_idx
  on public.classroom_records (collection, module_id);

create index if not exists classroom_records_lesson_idx
  on public.classroom_records (collection, lesson_id);

create index if not exists classroom_records_activity_idx
  on public.classroom_records (collection, activity_id);

create index if not exists classroom_records_question_idx
  on public.classroom_records (collection, question_id);

create index if not exists classroom_records_member_idx
  on public.classroom_records (collection, member_id);

create index if not exists classroom_records_enrolment_idx
  on public.classroom_records (collection, enrolment_id);

create index if not exists classroom_records_post_idx
  on public.classroom_records (collection, post_id);

create index if not exists classroom_records_status_idx
  on public.classroom_records (collection, status);

create index if not exists classroom_records_sequence_idx
  on public.classroom_records (collection, sequence);

create or replace function public.set_classroom_records_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists classroom_records_set_updated_at on public.classroom_records;

create trigger classroom_records_set_updated_at
before update on public.classroom_records
for each row
execute function public.set_classroom_records_updated_at();

alter table public.classroom_records enable row level security;

drop policy if exists "pilot anon read classroom records" on public.classroom_records;
drop policy if exists "pilot anon insert classroom records" on public.classroom_records;
drop policy if exists "pilot anon update classroom records" on public.classroom_records;

create policy "pilot anon read classroom records"
on public.classroom_records
for select
to anon, authenticated
using (true);

create policy "pilot anon insert classroom records"
on public.classroom_records
for insert
to anon, authenticated
with check (true);

create policy "pilot anon update classroom records"
on public.classroom_records
for update
to anon, authenticated
using (true)
with check (true);

grant select, insert, update on public.classroom_records to anon, authenticated;
