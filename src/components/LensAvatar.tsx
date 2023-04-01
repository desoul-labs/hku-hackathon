import getLensProfileURL from "@/utils/getLensProfileURL";
import { ProfileFragment } from "@lens-protocol/react-web";
import Image from "next/image";
import { useState } from "react";

type LensAvatarProps = {
  profile: ProfileFragment;
};

const LensAvatar = ({ profile }: LensAvatarProps) => {
  const [error, setError] = useState(false);
  const nameInit = (profile.name || profile.handle)?.slice(0, 1);

  const EmptyComponent = (
    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
      <p className="text-2xl text-black">{nameInit}</p>
    </div>
  );

  if (error) {
    return EmptyComponent;
  }

  return profile.picture || profile.coverPicture ? (
    <div className="w-14 h-14 rounded-full overflow-hidden">
      <Image
        src={getLensProfileURL(profile)}
        alt={`Avatar - ${nameInit}`}
        width={56}
        height={56}
        onError={() => setError(true)}
      />
    </div>
  ) : (
    EmptyComponent
  );
};

export default LensAvatar;
