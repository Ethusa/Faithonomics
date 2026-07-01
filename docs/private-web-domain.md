# Private Web Domain Publishing

Use this when the LMS should publish on a clean web address instead of a Netlify or Wix preview URL.

## Recommended Domain Shape

Use a subdomain for the LMS, for example:

```text
learn.yourdomain.com
```

This is cleaner than putting the LMS on the root domain because the root can still be used for the main public website.

## GitHub Repository Setting

In the GitHub repository, open:

```text
Settings > Secrets and variables > Actions > Variables
```

Add this repository variable:

```text
PAGES_CUSTOM_DOMAIN=learn.yourdomain.com
```

Replace `learn.yourdomain.com` with the final domain or subdomain.

The deploy workflow will then:

- build the Vite app with `/` as the base path
- add a `CNAME` file to the Pages artifact
- publish the LMS so it can work from the custom domain root

## DNS Record

At the place where the domain is managed, add this CNAME record:

```text
Type: CNAME
Host/Name: learn
Value/Target: ethusa.github.io
TTL: Automatic or 1 hour
```

If the domain host asks for the full host name, use:

```text
learn.yourdomain.com
```

## GitHub Pages Setting

In GitHub, open:

```text
Settings > Pages
```

Use:

```text
Build and deployment: GitHub Actions
Custom domain: learn.yourdomain.com
Enforce HTTPS: On
```

GitHub may take a few minutes to verify the DNS record.

## Privacy Note

GitHub Pages is public hosting. A custom domain makes the address professional, but it does not make the site private.

For real private learner access, the LMS needs authentication and database rules. The current plan is:

- GitHub Pages hosts the app.
- Supabase stores learner data.
- Supabase Auth and row-level security protect progress, posts, replies, and reflections.

Do not treat the GitHub Pages URL as private until Supabase Auth is added and the prototype write policies are tightened.
