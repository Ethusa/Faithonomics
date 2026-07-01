# Deployment Instructions

## Current Wix Target

Target Wix site confirmed through the Wix connector:

```text
Site name: Good News
Site ID / metaSiteId: 6091b6c7-94cc-4e7f-bb22-6a79d30e258c
Editor app instance in provided URL: a44a41cc-3d70-4a2a-82a7-33a27ef66911
```

Installed-app check on the target site confirmed CMS, Pricing Plans, Stores, Members-related collections, Blog,
Events, Bookings and other Wix apps are already present. The remaining blocker is the code release path: this
workspace currently has no `npm`, `npx`, or `wix` CLI executable available, and the LMS must be converted into a
generated Wix CLI app or deployed as a headless portal before it can be attached to this existing Wix site.

Deployment assumption confirmed by the site owner:

```text
This LMS is private and only for the Good News Wix site.
It does not need App Market packaging, public app listing, multi-site installation, or third-party tenant onboarding.
```

For this private single-site use case, the preferred launch path is:

1. Use site-level Wix CMS collections instead of App Market data-collection packaging.
2. Keep Wix Members, Contacts, Pricing Plans/Stores, Media Manager and Automations on the Good News site.
3. Deploy the learner portal as a private headless portal connected only to this site's Wix APIs.
4. Add `Student Portal` to the Good News navigation, pointing to `/student-portal` or the approved portal subdomain.
5. Use Wix Headless redirects for login, registration and checkout.
6. Use backend-only Wix API calls and Wix Secrets Manager for AI and privileged operations.

This private path still requires a deployable hosting target for the React portal. Wix Editor sites cannot accept this Vite
project by simply uploading the local `dist` folder through the connector. Use one of:

- Wix CLI private app release, once Wix CLI tooling is available locally.
- A headless portal host such as `learn.<domain>` embedded/linked from the Wix navigation.
- A native Velo rebuild inside the Wix site, reusing the CMS schemas and domain logic.

## Current Headless Portal Deployment

The learner portal is currently deployed to Netlify for the Good News Wix site:

```text
Portal URL: https://faithonomics-lms.netlify.app
Netlify project: faithonomics-lms
Netlify site ID: 4ab11c9b-3203-4413-8a97-824404a9baf6
Production deploy ID: 6a3d2259263b7c7c2e0b43f2
```

For a Wix-managed DNS CNAME record, use:

```text
Host name: learn
Value: faithonomics-lms.netlify.app
TTL: 1 Hour
```

If the required URL is `faithonomics.<domain>` instead of `learn.<domain>`, set the host name to `faithonomics`
and keep the same value, `faithonomics-lms.netlify.app`.

## Same-Domain Deployment

Use this option when the classroom should run at:

```text
https://www.mycollege.co.za/student-portal
```

1. Build the frontend:

   ```powershell
   pnpm build
   ```

2. Release the Wix app:

   ```powershell
   wix build
   wix release
   ```

3. Add a Wix route or embedded app page that serves the student portal at `/student-portal`.

4. Confirm the Wix OAuth redirect URI is exactly:

   ```text
   https://www.mycollege.co.za/student-portal
   ```

## Subdomain Deployment

Use this option when the classroom should run at:

```text
https://learn.mycollege.co.za
```

1. Deploy the frontend to the chosen hosting target.
2. Configure DNS for `learn.mycollege.co.za`.
3. Add the subdomain URL to allowed Wix OAuth redirects.
4. Keep all learner identity and course access checks in Wix backend APIs.

## Production Checklist

- Wix Members registration, login, and password recovery tested.
- Checkout returns do not create enrolment unless backend order verification succeeds.
- Learner can access only own progress, submissions, marks, and certificates.
- Lecturer can review assigned course submissions.
- Administrator can manage roles, enrolments, payments, certificates, AI usage, and audit logs.
- AI provider key exists only in Wix Secrets Manager.
- Browser bundle contains no privileged Wix credentials or API keys.
- Mobile layout tested at 390px, 768px, and desktop widths.
- Wix Automations are enabled for welcome, reminder, completion, and feedback events.
