export type SondeFile = {
  header: string[];
  data: string[][];
};

export type L100Header = {
  sourceFile: string;
  contact: string;
  station: string;
  stationHeight: string;
  latitude: string;
  longitude: string;
  flightNum: string;
  launchDate: string;
  launchTime: string;
  radiosondeType: string;
  radiosondeNum: string;
  o3SondeId: string;
  background: string;
  flowrate: string;
  rhCorr: string;
  sondeTotalO3DU: string;
  sondeTotalO3SBUV: string;
  columnNames: string[];
  columnUnits: string[];
};

export enum Stations {
  Huntsville = "Huntsville",
}

type DATEntry = {};
