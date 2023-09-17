import { L100Entry } from "../types.ts";
import { extractL100HeaderInfo } from "./index.ts";

export function createL100OEntry(
  header: string[],
  data: string[][]
): L100Entry {
  const {
    contact,
    station,
    stationHeight,
    latitude,
    longitude,
    flightNumber,
    launchDate,
    launchTime,
    radiosondeType,
    radiosondeNumber,
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
    flightNumber,
    launchDate,
    launchTime,
    radiosondeType,
    radiosondeNumber,
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
