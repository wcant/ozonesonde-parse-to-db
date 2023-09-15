import { parseMixedSondeLines } from "../utils/parseMixedSondeLines.ts";

const mixedSondeLines1 =
  "O3 Sonde ID    : 2Z1202   Background: 0.020 microamps (0.08 mPa)  Flowrate: 29.05 sec/100ml  RH Corr: 0.50 %";
const mixedSondeLines2 =
  "Sonde Total O3 : 378   (49) DU      Sonde Total O3 (SBUV): 363 (35) DU";

test("parseMixedSondeLines", () => {
  expect(parseMixedSondeLines(mixedSondeLines1)).toEqual([{}]);
});
