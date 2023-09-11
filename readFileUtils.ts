import fs from "fs";
import readline from "readline";

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
