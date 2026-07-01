# GitHub Pages + Supabase Hosting Plan

This is the no-credit hosting path for the Faithonomics LMS.

## Hosting Choice

Use GitHub Pages for the static Vite/React frontend.

Use Supabase as the external data basis for:

- learner progress
- lesson completion
- discussion posts and replies
- reflections and submissions
- future login/session storage

The app still builds in demo mode when Supabase variables are missing.

## GitHub Pages Setup

1. Create a GitHub repository for this project.
2. Upload or push the project files.
3. In GitHub, open **Settings > Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to `main` or run the workflow manually.

The workflow at `.github/workflows/deploy-pages.yml` builds the app and publishes `dist`.

## Supabase Setup

1. Create a Supabase project.
2. Open **SQL Editor**.
3. Run `docs/supabase-classroom-records.sql`.
4. Open **Project Settings > API**.
5. Copy the project URL.
6. Copy the anon public key.

## GitHub Variables and Secrets

In the GitHub repository, open **Settings > Secrets and variables > Actions**.

Add repository variables:

```text
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_TABLE=classroom_records
```

Add repository secret:

```text
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

On the next GitHub Pages build, the workflow will set:

```text
VITE_BACKEND_PROVIDER=supabase
```

If the Supabase URL or anon key is missing, it falls back to:

```text
VITE_BACKEND_PROVIDER=mock
```

## Production Security Note

The included SQL policies allow prototype writes from a static site. This is acceptable for testing the LMS flow, but not final production security.

Before real learners use it, add Supabase Auth and replace the prototype write policies with authenticated row-level security policies scoped to each learner.

## Suggested Publishing Flow

1. Publish GitHub Pages in demo mode first.
2. Confirm the LMS opens from the GitHub Pages URL.
3. Create Supabase and run the SQL.
4. Add the GitHub variables and secret.
5. Re-run the GitHub Pages workflow.
6. Test progress, reflections, and discussion posts.
