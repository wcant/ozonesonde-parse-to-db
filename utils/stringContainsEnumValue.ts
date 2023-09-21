export function stringContainsEnumValue(
  inputString: string,
  myEnum: {}
): string {
  // Convert enum values to an array of strings
  const enumValues = Object.values(myEnum) as string[];

  let foundValue = "";
  // Check if the inputString contains any of the enum values
  const result = enumValues.some((enumValue) => {
    if (inputString.includes(enumValue)) {
      foundValue = enumValue;
    }
  });

  return result ? foundValue : "";
}
