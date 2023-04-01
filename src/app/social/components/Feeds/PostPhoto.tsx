import getSafeURL from "@/utils/getSafeURL";
import { PostFragment } from "@lens-protocol/react-web";
import Image from "next/image";
import { useState } from "react";

type PostPhotoProps = {
  metadata: PostFragment["metadata"];
};

const PostPhoto = ({ metadata }: PostPhotoProps) => {
  const [error, setError] = useState(false);

  if (error) {
    return null;
  }

  return (
    metadata.media[0] && (
      <div className="my-4 w-full h-full relative">
        <Image
          src={getSafeURL(metadata.media[0].original.url)}
          alt="Post Photo"
          onError={() => setError(true)}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    )
  );
};

export default PostPhoto;
