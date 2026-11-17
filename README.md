# GMLinks Next.js Website

Implemented from the approved GMLinks visual direction.

## Included pages
- Home
- Services
- Coverage
- Our Work
- About Us
- Contact
- Request a Crew

## Stack
- Next.js App Router
- TypeScript
- Plain CSS
- Directus-ready CMS adapter
- Webhook-ready contact and crew request forms

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000

## CMS
The site runs immediately using fallback content in `lib/content.ts`.
When Directus is available, copy `.env.example` to `.env.local` and add:
- `DIRECTUS_URL`
- `DIRECTUS_TOKEN` (if required)

See `DIRECTUS_SCHEMA.md`.

## Forms
For now, forms log requests on the server if no webhook is configured.
For production, set:
- `GMLINKS_CONTACT_WEBHOOK_URL`
- `GMLINKS_CREW_WEBHOOK_URL`

Those can later point directly at the company software/API.

## Images
The current photographic assets are temporary visual placeholders.
The architecture deliberately makes them replaceable later through Directus.
The user-provided GMLinks logo is already included under `/public/gmlinks-logo.png`.


## Approved design assets included
This package now includes the approved page reference screenshots under `public/reference/`.
The Our Work city images are also extracted from the approved Our Work design and loaded locally.
