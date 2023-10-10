import fs from "fs";
import { prisma } from "../utils/index.ts";
import { readSondeFile } from "../utils/index.ts";
import { insertData } from "../utils/index.ts";

async function main() {
  const dataDir = process.env.TEST_L100_DATA_DIR;

  if (!dataDir) {
    throw new Error("TEST_L100_DATA_DIR environment variable not set");
  }

  const l100Files = fs
    .readdirSync(dataDir)
    .filter((file) => file.endsWith(".l100"));

  if (l100Files.length === 0) {
    throw new Error("No .l100 files found in data directory");
  }

  for (const file of l100Files) {
    const filePath = `${dataDir}/${file}`;
    let { header, data } = await readSondeFile(filePath, 29);
    header = [...header, file];
    await insertData(header, data);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
