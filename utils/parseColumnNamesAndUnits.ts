export const parseColumnNamesAndUnits = (string: string) => {
  const columnNamePattern = /\b[\w\s#]+(?=\s|$)/g;
  const columnNames = string.match(columnNamePattern);
  const columnUnits = string.match(columnNamePattern);

  return { columnNames, columnUnits };
};
