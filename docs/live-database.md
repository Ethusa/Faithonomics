# Live Database Setup

Faithonomics can use Supabase as the external database for the GitHub Pages build.
The current adapter stores each classroom item as a JSON payload in one indexed table:
`public.classroom_records`.

## What This Makes Live

- Course, level, lesson, activity, question, and answer-choice records
- Enrolments
- Lesson progress
- Activity completions
- Quiz attempts
- Submissions
- Discussion posts and replies
- Marks, feedback, certificates, AI usage, and audit logs when those workflows call the repository

The current React screens still read some demo data directly. After the database is seeded,
the next implementation step is to switch those screens to repository reads and writes.

## 1. Create The Supabase Project

1. Create a Supabase project.
2. Open the Supabase SQL editor.
3. Run `supabase/schema.sql`.
4. Run `npm run db:seed:sql` locally.
5. Run the generated `supabase/seed.sql` in the Supabase SQL editor.

The seed generator uses `VITE_BASE_PATH=/Faithonomics/` by default so public asset URLs work
on GitHub Pages. To generate for a different host:

```bash
VITE_BASE_PATH=/ npm run db:seed:sql
```

## 2. Add GitHub Actions Settings

In the GitHub repository, add these values under **Settings > Secrets and variables > Actions**.

Variables:

- `VITE_SUPABASE_URL`: your Supabase project URL
- `VITE_SUPABASE_TABLE`: `classroom_records`

Secrets:

- `VITE_SUPABASE_ANON_KEY`: your Supabase anon public API key

The deploy workflow automatically sets `VITE_BACKEND_PROVIDER=supabase` only when both
`VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` exist. Otherwise it builds with the mock provider.

## 3. Redeploy GitHub Pages

Push to `main` or run the `Deploy to GitHub Pages` workflow manually. After deployment, the live
bundle should contain your Supabase project URL.

## Security Note

The schema includes pilot policies that allow browser-based anon reads, inserts, and updates.
This is enough to prove the live workflow from a static GitHub Pages site, but it is not appropriate
for private production learner data. Before real learners use it, add Supabase Auth or route writes
through a backend API with server-side authorization.
