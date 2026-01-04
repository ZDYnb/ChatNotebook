# Note Chat

Next.js (App Router) + Prisma + SQLite scaffold for a chat-based learning journal.

## Setup
```bash
npm install
npx prisma migrate dev --name init
npm run seed
npm run dev
```

## What you should see
- `npx prisma studio` lists all six tables (`Session`, `Message`, `SourceBlock`, `AtomicNote`, `Flashcard`, `DailyLog`) with the seeded session and messages.
- `npm run seed` succeeds on a fresh DB and prints the seeded session id.
- `http://localhost:3000/` renders the starter page with the model list and next-step checklist.

## Configuration
- Database: SQLite at `file:./prisma/dev.db` (set via `DATABASE_URL` in `.env`).
- Scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`, `npm run seed`, `npm run prisma:studio`.

## Next steps
- Add API routes for sessions, messages, and source blocks.
- Build the chat UI and end-of-day review flows.
- Implement exports (Anki TSV and Obsidian markdown) and search.
