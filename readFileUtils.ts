import fs from "fs";
import readline from "readline";
import { L100Entry } from "./types.ts";
import {
  parseMixedSondeLines,
  parseColumnNamesAndUnits,
  parseLaunchTime,
} from "./utils/index.ts";

export type SondeData = {
  header: string[];
  data: string[];
};

export function readSondeFile(
  filename: string,
  headerLength: number
): Promise<SondeData> {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filename);
    const readLines = readline.createInterface({
      input: stream,
      crlfDelay: Infinity,
    });

    // read header before data (non-standard delimiter format)
    const header: string[] = [];
    const data: string[] = [];

    let count = 1;
    readLines
      .on("line", (line: string) => {
        if (count <= headerLength) {
          header.push(line);
          count++;
        } else {
          data.push(line);
          count++;
        }
      })
      .on("close", () => {
        resolve({ header, data });
      })
      .on("error", (err: any) => {
        console.error(err);
        reject(err);
      });
  });
}

export function createL100OEntry(header: string[], data: string[]): L100Entry {
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
    data: { columnNames, columnUnits, data },
  };
}

export function extractL100HeaderInfo(header: string[]) {
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

  const [o3SondeId, background, flowrate, rhCorr] = parseMixedSondeLines(
    header[24]
  );
  const [sondeTotalO3DU, sondeTotalO3SBUV] = parseMixedSondeLines(header[25]);

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

// export function createDATEntry({ header, data }) {}

// export function extractDATHeaderInfo(header) {}
