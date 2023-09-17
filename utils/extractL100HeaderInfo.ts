import {
  parseColumnNamesAndUnits,
  parseLaunchTime,
  parseVarsFromString,
} from "./index.ts";

export function extractL100HeaderInfo(header: string[]) {
  const L100_VARNAMES_LINE_25 = [
    "O3 Sonde ID",
    "Background",
    "Flowrate",
    "RH Corr",
  ];
  const L100_VARNAMES_LINE_26 = ["Sonde Total O3", "Sonde Total O3 (SBUV)"];

  const contact = header[13].split(":")[1].trim();
  const station = header[15].split(":")[1].trim();
  const stationHeight = header[16].split(":")[1].trim();
  const latitude = header[17].split(":")[1].trim();
  const longitude = header[18].split(":")[1].trim();
  const flightNumber = header[19].split(":")[1].trim();
  const launchDate = header[20].split(":")[1].trim();
  const launchTime = parseLaunchTime(header[21]);
  const radiosondeType = header[22].split(":")[1].trim();
  const radiosondeNumber = header[23].split(":")[1].trim();

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
  };
}
