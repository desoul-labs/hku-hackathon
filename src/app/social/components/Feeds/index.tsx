import LensAvatar from "@/components/LensAvatar";
import formatNumber from "@/utils/formatNumber";
import getTimeSince from "@/utils/getTimeSince";
import { PostFragment } from "@lens-protocol/react-web";
import { FiBookmark, FiHeart, FiMessageCircle, FiRepeat } from "react-icons/fi";
import PostPhoto from "./PostPhoto";

type FeedsProps = {
  posts: PostFragment[];
};

const renderDescription = (description: string) => {
  // Replace @mention and #hashtag with styled span
  const mentionHashtagRegex = /[@#]\w+/g;
  const descriptionWithMentionHashtag = description.replace(
    mentionHashtagRegex,
    '<span class="text-green-500">$&</span>'
  );

  // Replace URLs with styled link
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const descriptionWithLink = descriptionWithMentionHashtag.replace(
    urlRegex,
    '<a class="text-green-500 underline cursor-pointer" href="$1">$&</a>'
  );

  return (
    <div className="prose text-black my-2 overflow-hidden">
      <div dangerouslySetInnerHTML={{ __html: descriptionWithLink }} />
    </div>
  );
};

const Feeds = ({ posts }: FeedsProps) => {
  return (
    <div className="flex flex-col items-center px-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col justify-center max-w-2xl px-4 py-6 my-4 bg-white rounded-lg shadow-md w-full"
        >
          <div className="flex items-center">
            <LensAvatar profile={post.profile} />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-black">
                {post.profile.name ?? post.profile.handle}
              </h2>
              <span className="text-gray-400">@{post.profile.handle}</span>
              <span className="mx-2">&middot;</span>
              <span className="text-gray-400">
                {getTimeSince(post.createdAt)}
              </span>
            </div>
          </div>
          {renderDescription(post.metadata.content || "")}
          <PostPhoto metadata={post.metadata} />
          <div className="flex justify-between my-4">
            <div className="flex items-center text-gray-400">
              <FiMessageCircle className="mr-1" />
              <span>{formatNumber(post.stats.totalAmountOfComments)}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <FiRepeat className="mr-1" />
              <span>{formatNumber(post.stats.totalAmountOfMirrors)}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <FiBookmark className="mr-1" />
              <span>{formatNumber(post.stats.totalAmountOfCollects)}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <FiHeart className="mr-1" />
              <span>{formatNumber(post.stats.totalUpvotes)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feeds;
