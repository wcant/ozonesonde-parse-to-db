import { L100Entry } from "../types.ts";
import { extractL100HeaderInfo } from "./index.ts";
import { Prisma } from "@prisma/client";

export function createL100OEntry(header: string[], data: string[][]) {
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

  const completeFlight: Prisma.$L100FlightDataPayload = {
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
    data: { columnNames, columnUnits, data },
  };

  return completeFlight;
}
