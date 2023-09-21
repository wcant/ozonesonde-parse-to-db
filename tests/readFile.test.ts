// fileTests.ts
import {
  readSondeFile,
  SondeData,
  extractL100HeaderInfo,
} from "../readFileUtils.ts";

type TestResult = {
  passed: boolean;
  message: string;
  data: string[];
};

describe("Tests100mHeaders", () => {
  let fileData: SondeData;

  beforeAll(async () => {
    fileData = await readSondeFile(
      "../data/huntsville/100m/hu001_1999_04_20_20.l100",
      29
    );
  });

  afterAll(() => {
    if (process.exitCode === 0) {
      console.log(extractL100HeaderInfo(fileData.header));
    }
  });

  it('check if line 14 contains "PI Contact Info"', () => {
    expect(fileData.header[13]).toContain("PI Contact Info");
  });

  it('check if line 16 contains "Station"', () => {
    expect(fileData.header[15]).toContain("Station");
  });

  it('check if line 17 contains "Station Height"', () => {
    expect(fileData.header[16]).toContain("Station Height");
  });

  it('check if line 18 contains "Latitude"', () => {
    expect(fileData.header[17]).toContain("Latitude");
  });

  it('check if line 19 contains "Longitude"', () => {
    expect(fileData.header[18]).toContain("Longitude");
  });

  it('check if line 20 contains "Flight Number"', () => {
    expect(fileData.header[19]).toContain("Flight Number");
  });

  it('check if line 21 contains "Launch Date"', () => {
    expect(fileData.header[20]).toContain("Launch Date");
  });

  it('check if line 22 contains "Launch Time"', () => {
    expect(fileData.header[21]).toContain("Launch Time");
  });

  it('check if line 23 contains "Radiosonde Type"', () => {
    expect(fileData.header[22]).toContain("Radiosonde Type");
  });

  it('check if line 24 contains "Radiosonde Num"', () => {
    expect(fileData.header[23]).toContain("Radiosonde Num");
  });

  it('check if line 25 contains "O3 Sonde ID"', () => {
    expect(fileData.header[24]).toContain("O3 Sonde ID");
  });

  it('check if line 26 contains "Sonde Total O3"', () => {
    expect(fileData.header[25]).toContain("Sonde Total O3");
  });
});
