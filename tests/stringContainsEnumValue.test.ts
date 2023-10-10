import { stringContainsEnumValue } from "../utils/stringContainsEnumValue.ts";
import { Stations } from "../types.ts";

test("String contains value in Stations enum", () => {
  const myString = "Station        : Huntsville, AL";
  const containsEnumValue = stringContainsEnumValue(myString, Stations);
  expect(containsEnumValue).toBeTruthy();
});
