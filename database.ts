import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function insertData(): Promise<void> {
  const client = await pool.connect();

  try {
    // Your SQL INSERT statement here to insert 'header' and 'data' into the database.
    // You'll need to create a table and define the INSERT statement accordingly.
    // Example:
    // const insertQuery = 'INSERT INTO your_table (header_column, data_column) VALUES ($1, $2)';
    // await client.query(insertQuery, [header.join(','), data.join(',')]);
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
