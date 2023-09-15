import { parseColumnNamesAndUnits } from "../utils/parseColumnNamesAndUnits.ts";

const colNames =
  "Level   Press    Alt   Pottp   Temp   FtempV   Hum  Ozone  Ozone   Ozone  Ptemp  O3 # DN O3 Res  O3 Uncert";

const colUnits =
  " Num     hPa      km     K      C       C       %    mPa    ppmv   atmcm    C   10^11/cc   DU          %";

describe("column names and units match the expected result", () => {
  const namesResult = [
    "Level",
    "Press",
    "Alt",
    "Pottp",
    "Temp",
    "FtempV",
    "Hum",
    "Ozone",
    "Ozone",
    "Ozone",
    "Ptemp",
    "O3 # DN",
    "O3 Res",
    "O3 Uncert",
  ];
  expect(parseColumnNamesAndUnits(colNames)).toEqual(namesResult);

  const unitsResult = [
    "Num",
    "hPa",
    "km",
    "K",
    "C",
    "C",
    "%",
    "mPa",
    "ppmv",
    "atmcm",
    "C",
    "10^11/cc",
    "DU",
    "%",
  ];
  expect(parseColumnNamesAndUnits(colUnits)).toEqual(unitsResult);
});
