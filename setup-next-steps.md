# Polisetty Family Website Setup

## Current Version

The current website is a static HTML, CSS, and JavaScript project. It includes:

- A Firebase sign-in gate with Google Sign-In and email link authentication.
- A seven-generation Polisetty family tree.
- A desktop/tablet/laptop detailed tree view.
- A mobile-friendly branch view on the full tree page.
- Person detail popups with request-access/edit-ready fields.
- Copyright footer on every page.

It does not need a database to display the family tree.

Run it with:

```powershell
cd "C:\Users\ramji\Documents\Codex\2026-06-13\want-to-create-website-for-a\outputs"
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173
```

## Firebase Authentication Setup

Use Firebase for the live sign-in page.

1. Open Firebase Console and create a project.
2. Go to Authentication > Sign-in method.
3. Enable Google.
4. Enable Email/Password and turn on Email link sign-in.
5. Go to Project settings > General > Your apps.
6. Add a Web app and copy the Firebase config.
7. Paste those values into `firebase-config.js`.
8. Go to Authentication > Settings > Authorized domains.
9. Add your GitHub Pages domain, for example `initialpr-0209.github.io`.

Upload these changed files to GitHub:

- `index.html`
- `full-tree.html`
- `auth.js`
- `firebase-config.js`
- `setup-next-steps.md`

The old `supabase-config.js` is no longer required.
Mobile OTP is not used in the current free setup.

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
- Authentication/OTP: Firebase Auth, Auth0, Twilio, or a custom email OTP service
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
