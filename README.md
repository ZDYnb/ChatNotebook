# ChatNotebook / note-chat

Minimal Next.js + SQLite + Prisma scaffold for a chat-based learning journal MVP.

## Stack choices
- Next.js (App Router, TypeScript)
- Prisma ORM with SQLite (local-first default)
- Simple starter UI (app router) ready for chat, review, export features in later tasks

## Getting started
1. Move into the app folder:
   ```bash
   cd note-chat
   ```
2. Install dependencies (internet access required):
   ```bash
   npm install
   ```
3. Apply the initial migration and generate the Prisma client:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Seed the database with the starter session and messages:
   ```bash
   npm run seed
   ```
5. Run the dev server:
   ```bash
   npm run dev
   ```

### Acceptance checks
- `npx prisma studio` shows the tables `Session`, `Message`, `SourceBlock`, `AtomicNote`, `Flashcard`, and `DailyLog` along with the seeded session/messages.
- Running `npm run seed` on a fresh DB completes without errors and logs the seeded session id.
- Visiting `http://localhost:3000/` renders the scaffold page listing the core models and next steps.

## Files of interest
- `note-chat/prisma/schema.prisma` — data model for sessions, messages, source blocks, atomic notes, flashcards, and daily logs.
- `note-chat/prisma/seed.js` — seeds one demo session with messages and a source block.
- `note-chat/app/page.tsx` — starter page with guidance for next implementation steps.

## Notes
- Defaults favor local development: SQLite DB at `prisma/dev.db` (configurable via `.env`).
- Keep changes small and additive; extend the scaffold with APIs, chat UI, and exports in follow-up tasks.
