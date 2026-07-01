# Installation Instructions

## Prerequisites

- Existing Wix website with Members enabled.
- Wix CMS enabled through this app's Data Collections extension.
- Wix Contacts, Wix Media Manager, Wix Automations, and either Wix Pricing Plans or Wix eCommerce enabled.
- Node.js 20+ for local development.
- Wix CLI authenticated to the Wix account that owns the site.

## Local Setup

1. Install dependencies:

   ```powershell
   pnpm install
   ```

2. Create local configuration:

   ```powershell
   Copy-Item .env.example .env.local
   ```

3. Set these values in `.env.local`:

   - `VITE_WIX_SITE_ID`
   - `VITE_WIX_CLIENT_ID`
   - `VITE_WIX_SITE_BASE_URL`
   - `VITE_STUDENT_PORTAL_URL`
   - `VITE_APP_NAMESPACE`
   - `WIX_APP_NAMESPACE`

4. In Wix Secrets Manager, create the secret named by `OPENAI_SECRET_NAME` with the AI provider API key. Do not expose this value in browser environment variables.

5. Run the app locally:

   ```powershell
   pnpm dev
   ```

## Wix CLI App Setup

This project includes `wix.config.json`, dashboard extension source, backend API source, an eCommerce order-approved event handler, and CMS schema definitions.

When the Wix CLI is available on your machine:

```powershell
wix login
wix build
wix preview
wix release
```

If creating the app from scratch in Wix Dev Center, create a private app first, copy its namespace into `.env.local`, then release this project to that app.

## Required Permission Scopes

Grant the app permission to:

- Read Wix Members.
- Read and update Wix Contacts.
- Read and write CMS data items for the classroom collections.
- Read Wix eCommerce orders or Pricing Plan purchases.
- Use Wix Media Manager files.
- Read Wix Secrets Manager values from backend code.
- Trigger Wix Automations.

Learners should never receive elevated CMS write permissions. Sensitive writes go through backend endpoints.
