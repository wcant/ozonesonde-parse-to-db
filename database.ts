import { Prisma } from "@prisma/client";
import { createL100OEntry } from "./utils/createL100DbEntry.ts";
import { prisma } from "./utils/db.ts";

export async function insertData(
  header: string[],
  data: string[][]
): Promise<void> {
  const completeFlight = createL100OEntry(header, data);
  await prisma.l100FlightData.create({ data: completeFlight });
}
