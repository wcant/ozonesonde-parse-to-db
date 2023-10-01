export function stringContainsEnumValue<T extends Record<string, string>>(
  inputString: keyof T,
  myEnum: T
): string | null {
  // Check if the inputString is a value of the enum
  const str = inputString as string;
  for (const value of Object.values(myEnum)) {
    if (str.includes(value)) return value;
  }
  return null;
}
