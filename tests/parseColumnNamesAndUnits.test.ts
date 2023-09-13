import { parseColumnNamesAndUnits } from "../utils/parseColumnNamesAndUnits.ts";
import { parseMixedSondeLines } from "../utils/parseMixedSondeLines.ts";

const colNames =
  "Level   Press    Alt   Pottp   Temp   FtempV   Hum  Ozone  Ozone   Ozone  Ptemp  O3 # DN O3 Res  O3 Uncert";

const colUnits =
  " Num     hPa      km     K      C       C       %    mPa    ppmv   atmcm    C   10^11/cc   DU          %";

test("parseColumnNamesAndUnits", () => {
    const result1 =
    expect(parseColumnNamesAndUnits(colNames)).toEqual();

    const result2 =
    expect(parseColumnNamesAndUnits(colUnits)).toEqual();
});

test("parseMixedSondeLines", () => {
    expect(parseMixedSondeLines().toEqual();
});
