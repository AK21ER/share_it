const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create a test user
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      clerkId: 'test-clerk-id',
      name: 'Test User',
      username: 'testuser',
      email: 'test@example.com',
      image: '/avatar.png',
    },
  });

  // Create some test posts
  await prisma.post.createMany({
    data: [
      {
        content: 'Hello, this is a test post!',
        authorId: user.id,
      },
      {
        content: 'Welcome to the social media app!',
        authorId: user.id,
      },
      {
        content: 'This is another test post to check if everything is working.',
        authorId: user.id,
      },
    ],
  });

  console.log('Seeded database with test data');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
