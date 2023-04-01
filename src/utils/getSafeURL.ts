export default function getSafeURL(url: string) {
  return url.startsWith("ipfs")
    ? url.replace(/^ipfs:\/\//, "https://ipfs.io/ipfs/")
    : url;
}
