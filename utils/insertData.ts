import { Prisma } from "@prisma/client";
import { createL100DbEntry } from "./createL100DbEntry.ts";
import { prisma } from "./db.ts";

export async function insertData(
  header: string[],
  data: string[][]
): Promise<void> {
  const completeFlight = createL100DbEntry(header, data);
  try {
    await prisma.l100FlightData.create({ data: completeFlight });
  } catch (error) {
    console.error(error);
  }
}
