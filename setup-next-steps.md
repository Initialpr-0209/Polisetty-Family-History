# Polisetty Family Website Setup

## Current Version

The current website is a static HTML, CSS, and JavaScript project. It includes:

- A sign-in gate with email/mobile validation and OTP-style verification.
- A seven-generation Polisetty family tree.
- A desktop/tablet/laptop detailed tree view.
- A mobile-friendly branch view on the full tree page.
- Person detail popups with request-access/edit-ready fields.
- Copyright footer on every page.

It does not need a database to run locally.

Run it with:

```powershell
cd "C:\Users\ramji\Documents\Codex\2026-06-13\want-to-create-website-for-a\outputs"
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173
```

## Required For A Database Version

Install later when you want real login, real OTP, admin approval, and saved edits across all users:

- Node.js
- PostgreSQL or MySQL
- A backend framework such as Express.js
- A validation library such as Zod or Joi
- An email/SMS OTP provider

Recommended simple stack:

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js with Express
- Database: PostgreSQL
- Validation: Zod
- Authentication/OTP: Firebase Auth, Supabase Auth, Auth0, Twilio, or a custom email OTP service
- Image storage: local uploads folder first, cloud storage later

## Validation Rules

- Name is required.
- Relation is required.
- Generation must be between 1 and 7.
- Parents must already exist in the database.
- Spouse must already exist in the database.
- Each member ID must be unique.
- Birth year must be lower than death year when both are provided.
- Photo URL must be empty or a valid image path.
- Email must be a valid email format.
- Mobile number must be 10 digits and must reject repeated/invalid values.
- Date values should be valid `DDMMYYYY` or intentionally set as `N/A`.

## Database Tables

Use `database-schema.sql` as the starter database structure. It includes:

- `family_members`
- `family_relationships`
- `family_notes`
- `family_events`

## Example Flow

1. Add Father and Mother in `family_members`.
2. Add a spouse relationship between them in `family_relationships`.
3. Add each child in `family_members`.
4. Add parent relationships from each child to Father and Mother.
5. Continue the same pattern through all seven generations.
