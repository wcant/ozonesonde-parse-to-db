export function parseLaunchTime(string: string) {
  // Regular expression to match the first colon and capture the name and time
  const regex = /^([^:]+)\s*:\s*(.+)$/;

  const match = string.match(regex);

  if (match) {
    const launchTimeName = match[1].trim();
    const launchTime = match[2].trim();
    return launchTime;
  } else {
    console.error(`Error parsing launch time: No match found. ${string}`);
    return "";
  }
}
