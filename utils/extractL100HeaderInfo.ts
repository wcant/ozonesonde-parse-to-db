import {
  parseColumnNamesAndUnits,
  parseLaunchTime,
  parseVarsFromString,
  stringContainsEnumValue,
} from "./index.ts";

import { Stations, L100Header } from "../types.ts";

export function extractL100HeaderInfo(header: string[]): L100Header {
  const L100_VARNAMES_LINE_25 = [
    "O3 Sonde ID",
    "Background",
    "Flowrate",
    "RH Corr",
  ];
  const L100_VARNAMES_LINE_26 = ["Sonde Total O3", "Sonde Total O3 (SBUV)"];

  const stationEnumValue = stringContainsEnumValue(
    header[15] as keyof typeof Stations,
    Stations
  );

  if (!stationEnumValue) {
    throw new TypeError("No known station found in header.");
  }

  const contact = header[13].split(":")[1].trim();
  // const station = header[15].split(":")[1].trim();
  const stationHeight = header[16].split(":")[1].trim();
  const latitude = header[17].split(":")[1].trim();
  const longitude = header[18].split(":")[1].trim();
  const flightNum = header[19].split(":")[1].trim();
  const launchDate = header[20].split(":")[1].trim();
  const launchTime = parseLaunchTime(header[21]);
  const radiosondeType = header[22].split(":")[1].trim();
  const radiosondeNum = header[23].split(":")[1].trim();

  const [o3SondeId, background, flowrate, rhCorr] = parseVarsFromString(
    header[24],
    L100_VARNAMES_LINE_25,
    ":"
  );
  const [sondeTotalO3DU, sondeTotalO3SBUV] = parseVarsFromString(
    header[25],
    L100_VARNAMES_LINE_26,
    ":"
  );

  const columnNames = parseColumnNamesAndUnits(header[27]);
  const columnUnits = parseColumnNamesAndUnits(header[28]);

  return {
    station: stationEnumValue,
    contact,
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
  };
}
