export default function getTimeSince(dateString: string): string {
  const date = new Date(dateString);
  const elapsed = Date.now() - date.getTime();

  if (elapsed < 60000) {
    return Math.floor(elapsed / 1000) + "s";
  } else if (elapsed < 3600000) {
    return Math.floor(elapsed / 60000) + "m";
  } else if (elapsed < 86400000) {
    return Math.floor(elapsed / 3600000) + "h";
  } else if (elapsed < 604800000) {
    return Math.floor(elapsed / 86400000) + "d";
  } else if (elapsed < 2592000000) {
    return Math.floor(elapsed / 604800000) + "w";
  } else if (elapsed < 31536000000) {
    return Math.floor(elapsed / 2592000000) + "mo";
  } else {
    return Math.floor(elapsed / 31536000000) + "y";
  }
}
