import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function insertData(data): Promise<void> {
  await prisma;
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
