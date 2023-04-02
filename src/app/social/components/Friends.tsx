import Loading from "@/components/Loading";
import { lensClient } from "@/config/lens";
import useFriends from "@/hooks/useFriends";
import { useAppSelector } from "@/redux/store";
import {
  PaginatedResult,
  PublicationFragment,
  PublicationTypes,
} from "@lens-protocol/client";
import { PostFragment } from "@lens-protocol/react-web";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useAccount } from "wagmi";
import Feeds from "./Feeds";

export default function Friends() {
  const router = useRouter();
  const { address } = useAccount();
  const profileId = useAppSelector((state) => state.auth.profileId);
  const { friends } = useFriends(profileId, address || "");
  const [publicationResult, setPublicationResult] =
    useState<PaginatedResult<PublicationFragment>>();
  const [items, setItems] = useState<PublicationFragment[]>([]);

  const friendProfileIds = useMemo(
    () => friends?.map((x) => x.profile.id),
    [friends]
  );

  const onLoadMore = useCallback(async () => {
    const result = await publicationResult?.next();

    if (result) {
      setPublicationResult(result);

      if (result.items) {
        setItems([...items, ...result.items]);
      }
    }
  }, [items, publicationResult]);

  useEffect(() => {
    if (friendProfileIds?.length) {
      (async () => {
        const result = await lensClient.publication.fetchAll({
          profileIds: friendProfileIds,
          publicationTypes: [PublicationTypes.Post],
          limit: 10,
        });
        setPublicationResult(result);

        if (result.items.length) {
          setItems(result.items);
        }
      })();
    }
  }, [friendProfileIds]);

  useEffect(() => {
    if (!profileId || !address) {
      alert("Please login again");
      router.push("/");
    }
  }, [profileId, address, router]);

  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-3 lg:px-8">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Friends
          </h1>
        </div>
      </header>
      <main>
        {!profileId || !address || !publicationResult ? (
          <div className="my-3">
            <Loading isCenter />
          </div>
        ) : (
          <div className="mx-auto max-w-7xl py-3 sm:px-3 lg:px-8">
            {publicationResult && !items.length ? (
              <div className="flex justify-center align-center">
                <p className="text-l mx-3 my-8">You have no friend</p>
              </div>
            ) : (
              <InfiniteScroll
                pageStart={0}
                loadMore={onLoadMore}
                hasMore={!!publicationResult?.pageInfo.next}
                loader={<Loading isCenter />}
                useWindow={false}
              >
                <Feeds posts={items as unknown as PostFragment[]} />
              </InfiniteScroll>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
