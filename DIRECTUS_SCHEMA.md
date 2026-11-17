# Directus collections for GMLinks

Create these collections when Directus is connected.

## services
- id
- slug
- title
- description
- image
- sort
- visible

## work_cities
- id
- city
- image
- visible
- order

This intentionally matches the approved Our Work behavior:
**image + city only**, no link and no extra project details.

## coverage_cities
- id
- city
- country
- region
- latitude
- longitude
- visible
- order

## site_settings
- booking_email
- phone
- whatsapp
- copyright_text
- social_links (JSON)

The frontend already falls back to local content if Directus is not configured.
