import { parseVarsFromString } from "../utils/parseVarsFromString.ts";

const mixedSondeLines1 =
  "O3 Sonde ID    : 2Z1202   Background: 0.020 microamps (0.08 mPa)  Flowrate: 29.05 sec/100ml  RH Corr: 0.50 %";
const mixedSondeLines2 =
  "Sonde Total O3 : 378   (49) DU      Sonde Total O3 (SBUV): 363 (35) DU";

const L100_VARNAMES_LINE_25 = [
  "O3 Sonde ID",
  "Background",
  "Flowrate",
  "RH Corr",
];
const L100_VARNAMES_LINE_26 = ["Sonde Total O3", "Sonde Total O3 (SBUV)"];

describe("parseVarsFromString", () => {
  it("parseVarsFromString", () => {
    expect(
      parseVarsFromString(mixedSondeLines1, L100_VARNAMES_LINE_25, ":")
    ).toEqual([
      "2Z1202",
      "0.020 microamps (0.08 mPa)",
      "29.05 sec/100ml",
      "0.50 %",
    ]);
  });

  it("parseVarsFromString", () => {
    expect(
      parseVarsFromString(mixedSondeLines2, L100_VARNAMES_LINE_26, ":")
    ).toEqual(["378   (49) DU", "363 (35) DU"]);
  });
});
