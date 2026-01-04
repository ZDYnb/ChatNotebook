import { PrismaClient, MessageRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const session = await prisma.session.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "Today's Session",
      projectTag: 'demo',
      messages: {
        create: [
          {
            role: MessageRole.USER,
            content: 'How can I build a minimal chat-based learning journal?'
          },
          {
            role: MessageRole.ASSISTANT,
            content: 'Start by defining your core models and persistence with Prisma and SQLite.'
          },
          {
            role: MessageRole.USER,
            content: 'Great, scaffolded the database and ready to add APIs next.'
          }
        ]
      },
      sourceBlocks: {
        create: [
          {
            content: 'Sample tutorial snippet to link against future notes.'
          }
        ]
      }
    }
  });

  console.log(`Seeded session with id: ${session.id}`);
}

main()
  .catch((error) => {
    console.error('Seed failed', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
