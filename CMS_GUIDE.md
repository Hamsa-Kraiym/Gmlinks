# GMLinks Our Work Admin

The project now includes Directus Data Studio for managing Our Work.

## Local login
- URL: http://localhost:8055/admin
- Email: admin@gmlinks.local
- Password: GMLinks2026!

These credentials are for local development only. Change them before any public deployment.

## First start
1. Install Docker Desktop for Windows.
2. Double-click `START_CMS.bat`.
3. The first run downloads Directus and creates the database.
4. The setup automatically creates `work_cities` and imports the 12 existing city images.
5. Directus opens in your browser.

## Add an Our Work item
Open **Content → Our Work** and click **Create Item**.
Fill:
- City
- Image
- Visible
- Sort
Then Save.

The Next.js Our Work page reads this collection automatically. Cards remain image + city only and are not links.
