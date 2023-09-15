import { parseLaunchTime } from "../utils/parseLaunchTime.ts";

const inputString = "Launch Time    : 20:31:51 GMT";

test("launch time is a single string HH:MM:SS", () => {
  expect(parseLaunchTime(inputString)).toEqual("20:31:51 GMT");
});
