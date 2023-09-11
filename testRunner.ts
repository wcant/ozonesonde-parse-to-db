import { run } from "jest";

const jestConfig = {
  testRegex: "fileTests.ts",
};

run(jestConfig).then((result) => {
  if (result.results.numFailedTests > 0) {
    console.error("Some tests failed.");
    process.exit(1);
  } else {
    console.log("All tests passed.");
    process.exit(0);
  }
});
