export type L100Entry = {
  contact: string;
  station: string;
  stationHeight: string;
  latitude: string;
  longitude: string;
  flightNumber: string;
  launchDate: string;
  launchTime: string;
  radiosondeType: string;
  radiosondeNumber: string;
  o3SondeId: string;
  background: string;
  flowrate: string;
  rhCorr: string;
  sondeTotalO3DU: string;
  sondeTotalO3SBUV: string;
  data: {
    columnNames: string[];
    columnUnits: string[];
    data: string[];
  };
};

type DATEntry = {};
