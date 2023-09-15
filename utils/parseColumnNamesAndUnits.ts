export const parseColumnNamesAndUnits = (string: string) => {
  const columnPattern = /([^:]+)\s*:\s*([^:]+(?=.*:)|[^:]+)$/g;

  const result = string.match(columnPattern);

  if (result !== null) {
    return result;
  } else {
    console.error("No matching column or unit names found.");
    return [];
  }
};
