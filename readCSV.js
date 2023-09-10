const fs = require("fs");
const { parse } = require("csv-parse");

if (process.argv.length === 2) {
  console.error("Expected at least one argument");
  process.exit(1);
} else {
  const filename = process.argv[2];
  fs.createReadStream(filename)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", (r) => {
      console.log(r);
    });
}
