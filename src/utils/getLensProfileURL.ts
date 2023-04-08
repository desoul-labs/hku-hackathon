import { ProfileFragment } from "@lens-protocol/react-web";
import getSafeURL from "./getSafeURL";

export default function getLensProfileURL(profile: ProfileFragment) {
  if (profile?.coverPicture?.__typename === "MediaSet") {
    return getSafeURL(profile?.coverPicture.original?.url);
  }

  if (profile?.coverPicture?.__typename === "NftImage") {
    return getSafeURL(profile?.coverPicture.uri);
  }

  if (profile?.picture?.__typename === "MediaSet") {
    return getSafeURL(profile?.picture.original?.url);
  }

  if (profile?.picture?.__typename === "NftImage") {
    return getSafeURL(profile?.picture.uri);
  }

  return "";
}
