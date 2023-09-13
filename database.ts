import { PrismaClient } from "@prisma/client";

export async function insertData(data): Promise<void> {
  const prisma = new PrismaClient();

  try {
    const result = await prisma.
  } finally {
    client.release();
  }
}

insertData()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
