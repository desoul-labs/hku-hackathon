import {
  FollowerFragment,
  FollowingFragment,
  useProfileFollowers,
  useProfileFollowing,
} from "@lens-protocol/react-web";
import { useEffect, useMemo } from "react";

export default function useFriends(profileId: string, walletAddress: string) {
  const followingResult = useProfileFollowing({
    walletAddress,
    limit: 50,
  });

  const followersResult = useProfileFollowers({
    profileId,
    limit: 50,
  });

  useEffect(() => {
    (async () => {
      if (followersResult.hasMore) {
        try {
          await followersResult.next();
        } catch (err) {}
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followersResult.hasMore]);

  useEffect(() => {
    (async () => {
      if (followingResult.hasMore) {
        try {
          await followingResult.next();
        } catch (err) {}
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followingResult.hasMore]);

  const followers = useMemo(
    () =>
      Object.values(
        followersResult.data?.reduce(
          (acc, x) => ({
            ...acc,
            [x.wallet.address]: x,
          }),
          {} as { [address: string]: FollowerFragment }
        ) || {}
      ),
    [followersResult.data]
  );

  const following = useMemo(
    () =>
      Object.values(
        followingResult.data?.reduce(
          (acc, x) => ({
            ...acc,
            [x.profile.id]: x,
          }),
          {} as { [address: string]: FollowingFragment }
        ) || {}
      ),
    [followingResult.data]
  );

  const friends = useMemo(() => {
    let result: FollowingFragment[] | undefined;

    if (
      followersResult.data &&
      followingResult.data &&
      !followersResult.hasMore &&
      !followingResult.hasMore
    ) {
      result = [];

      const followerAddresses = [
        ...new Set(followersResult.data.map((x) => x.wallet.address)),
      ];

      followingResult.data.forEach((x) => {
        if (followerAddresses.includes(x.profile.ownedBy)) {
          result?.push(x);
        }
      });
    }

    return result;
  }, [
    followersResult.data,
    followingResult.data,
    followersResult.hasMore,
    followingResult.hasMore,
  ]);

  return {
    followers,
    following,
    friends,
  };
}
