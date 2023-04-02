import Loading from "@/components/Loading";
import {
  PostFragment,
  PublicationSortCriteria,
  PublicationTypes,
  useExplorePublications,
} from "@lens-protocol/react-web";
import InfiniteScroll from "react-infinite-scroller";
import Feeds from "./Feeds";

export default function Discovery() {
  const { data, loading, hasMore, next } = useExplorePublications({
    publicationTypes: [PublicationTypes.Post],
    sortCriteria: PublicationSortCriteria.Latest,
    limit: 10,
  });

  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-3 lg:px-8">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Discovery
          </h1>
        </div>
      </header>
      <main>
        {loading || !data?.length ? (
          <div className="my-3">
            <Loading isCenter />
          </div>
        ) : (
          <div className="mx-auto max-w-7xl py-3 sm:px-3 lg:px-8">
            <InfiniteScroll
              pageStart={0}
              loadMore={next}
              hasMore={hasMore}
              loader={<Loading isCenter />}
              useWindow={false}
            >
              <Feeds posts={data as PostFragment[]} />
            </InfiniteScroll>
          </div>
        )}
      </main>
    </div>
  );
}
