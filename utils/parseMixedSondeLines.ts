export const parseMixedSondeLines = (string: string): string[] => {
  // const keyValuePattern = /([^:]+)\s*:\s*([^:]+(?=:)|[^:]+)$/g;

  const L100_VARNAMES_LINE_25 = [
    "O3 Sonde ID",
    "Background",
    "Flowrate",
    "RH Corr",
  ];
  const L100_VARNAMES_LINE_26 = ["Sonde Total O3", "Sonde Total O3 (SBUV)"];

  const values = [];
  let match;

  while ((match = keyValuePattern.exec(string)) !== null) {
    const key = match[1].trim();
    const value = match[2].trim();
    values.push(value);
  }

  return values;
};

const mixedSondeLines1 =
  "O3 Sonde ID    : 2Z1202   Background: 0.020 microamps (0.08 mPa)  Flowrate: 29.05 sec/100ml  RH Corr: 0.50 %";
const mixedSondeLines2 =
  "Sonde Total O3 : 378   (49) DU      Sonde Total O3 (SBUV): 363 (35) DU";

console.log(parseMixedSondeLines(mixedSondeLines1));
console.log(parseMixedSondeLines(mixedSondeLines2));

// const L100_VARNAMES_LINE_25 = ["O3 Sonde ID","Background", "Flowrate", "RH Corr"];
// const L100_VARNAMES_LINE_26 = ["Sonde Total O3", "Sonde Total O3 (SBUV)"];

// const mixedSondeLines1 =
//   "O3 Sonde ID    : 2Z1202   Background: 0.020 microamps (0.08 mPa)  Flowrate: 29.05 sec/100ml  RH Corr: 0.50 %";
// const mixedSondeLines2 =
//   "Sonde Total O3 : 378   (49) DU      Sonde Total O3 (SBUV): 363 (35) DU";

// for (let i=0; i<L100_VARNAMES_LINE_25.length-1; i++) {
// 	const left = L100_VARNAMES_LINE_25[i];
//   const right = L100_VARNAMES_LINE_25[i+1];

// }
