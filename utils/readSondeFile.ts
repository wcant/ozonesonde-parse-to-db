import fs from "fs";
import readline from "readline";
import { SondeData } from "../types.ts";

function separateDataColumns(data: string) {
  const dataColumns = data[0].split(" ").map((col) => col.trim());
  return dataColumns;
}

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
    const data: string[][] = [];

    let count = 1;
    readLines
      .on("line", (line: string) => {
        if (count <= headerLength) {
          header.push(line);
          count++;
        } else {
          data.push(separateDataColumns(line));
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
