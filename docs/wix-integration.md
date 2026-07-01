# Wix Integration Instructions

## Target Site

The connected Wix account currently has several candidate sites. Before releasing to production, choose the exact target site in Wix Dev Center or via the Wix CLI using its site ID.

## Navigation

Add a navigation item to the existing Wix website:

- Label: `Student Portal`
- URL for same-domain install: `/student-portal`
- URL for subdomain install: `https://learn.mycollege.co.za`

For a subdomain, use Wix-supported OAuth redirects because browser sessions cannot be assumed to share across domains.

## Course Buttons

Public course pages on the Wix site should link to:

```text
/student-portal?course=<course-slug>
```

For paid courses, the Wix site button should start Wix checkout for the matching Wix Pricing Plan or Wix eCommerce product. Do not grant access from the browser success page.

## Payment and Enrolment Flow

1. Visitor selects a course on the Wix site.
2. Visitor signs in or registers through Wix Members.
3. Wix checkout processes payment.
4. The `order-approved` backend event verifies the approved Wix order.
5. The backend maps the purchased product or plan ID to a course.
6. The backend creates an `Enrolments` record using the Wix Member ID and Contact ID.
7. The portal shows the course on the learner dashboard.

Free courses and administrator-created enrolments use the same `Enrolments` collection, with `source` set to `free`, `admin`, or `code`.

## Wix Automations

Create automations that listen for app events or backend-triggered contact actions:

- `CLASSROOM_WELCOME`: welcome message after verified enrolment.
- `CLASSROOM_REMINDER`: reminder when no learner activity is recorded.
- `CLASSROOM_COMPLETION`: completion email when certificate is issued.
- `CLASSROOM_SUBMISSION_REVIEWED`: feedback notification after lecturer review.

Automation payload definitions are in `src/wix/automationEvents.ts`.

## Branding

Match the existing Wix website by setting:

- Site logo in the header area.
- Primary/accent colours in CMS course theme fields.
- Typography through the Wix site theme or equivalent CSS tokens.

The classroom interface is intentionally original and does not copy Wix Online Programs branding, code, or interface structure.
