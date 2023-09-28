import { extractL100HeaderInfo } from "./index.ts";
import { Prisma } from "@prisma/client";

export function createL100ODbEntry(
  header: string[],
  data: string[][]
): Prisma.L100FlightDataCreateInput {
  const stringifiedData = JSON.stringify(data);
  const {
    contact,
    station,
    stationHeight,
    latitude,
    longitude,
    flightNum,
    launchDate,
    launchTime,
    radiosondeType,
    radiosondeNum,
    o3SondeId,
    background,
    flowrate,
    rhCorr,
    sondeTotalO3DU,
    sondeTotalO3SBUV,
    columnNames,
    columnUnits,
  } = extractL100HeaderInfo(header);

  const completeFlight = {
    contact,
    station,
    stationHeight,
    latitude,
    longitude,
    flightNum,
    launchDate,
    launchTime,
    radiosondeType,
    radiosondeNum,
    o3SondeId,
    background,
    flowrate,
    rhCorr,
    sondeTotalO3DU,
    sondeTotalO3SBUV,
    columnNames,
    columnUnits,
    data: stringifiedData,
  };

  return completeFlight;
}
