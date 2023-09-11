import { readSondeFile } from "./readFileUtils.js";

if (process.argv.length === 2) {
  console.error("Expected at least one argument");
} else {
  const filename = process.argv[2];
  if (filename.endsWith(".l100")) {
    const { header, data } = await readSondeFile(filename, 29);
    console.log(header);
  } else if (filename.endsWith(".dat")) {
    const { header, data } = await readSondeFile(filename, 49);
  } else {
    console.error("Expected .l100 or .dat file");
  }
}

const filePath = "path/to/your/file.txt"; // Replace with the actual file path.

async function main() {
  const testResult = await readTestAndInsert(filePath);

  if (testResult.passed) {
    console.log("Tests passed. Inserting data into the database...");
    // Retrieve 'header' and 'data' from the 'readTestAndInsert' result.
    const { header, data } = await readLinesFromFile(filePath);
    await insertData(header, data);
    console.log("Data inserted successfully.");
  } else {
    console.error("Tests failed:", testResult.message);
  }
}

main().catch((error) => {
  console.error("An error occurred:", error);
});
