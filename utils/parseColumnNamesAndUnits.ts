export const parseColumnNamesAndUnits = (string: string): string[] => {
  const columnPattern = /([^:]+)\s*:\s*([^:]+(?=.*:)|[^:]+)$/g;

  const result = string.match(columnPattern);
  console.log(string);
  console.log(result);
  if (result !== null) {
    return result;
  } else {
    console.error("No matching column or unit names found.");
    return [];
  }
};
