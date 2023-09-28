export function stringContainsEnumValue<T extends Record<string, string>>(
  inputString: keyof T,
  myEnum: T
): T[keyof T] | null {
  // Check if the inputString is a value of the enum
  const enumValues = Object.values(myEnum).includes(String(inputString));

  return enumValues ? myEnum[inputString] : null;
}
