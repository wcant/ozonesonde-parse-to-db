export const parseMixedSondeLines = (string: string) => {
  const keyValuePattern = /([^:]+)\s*:\s*([^:]+)/g;

  const keyValuePairs = [];
  let match;

  while ((match = keyValuePattern.exec(string)) !== null) {
    const key = match[1].trim();
    const value = match[2].trim();
    keyValuePairs.push({ key, value });
  }

  return keyValuePairs;
};
