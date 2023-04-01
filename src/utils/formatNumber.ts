export default function formatNumber(num: number) {
  if (num >= 1000) {
    const formatted = (num / 1000).toFixed(num % 1000 !== 0 ? 2 : 0);
    return +formatted.replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + "k";
  } else {
    return +num.toFixed(4);
  }
}
