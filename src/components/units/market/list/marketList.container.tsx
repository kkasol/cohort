import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import MarketListUI from "./marketList.presenter";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "./marketList.queries";

export default function MarketList(): JSX.Element {
  const router = useRouter();

  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(
    FETCH_USED_ITEMS
  );

  const onClickToDetail = (el: IUseditem) => {
    router.push(`/market/${el._id}`);
  };
  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditems === undefined)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems],
        };
      },
    });
  };

  return <MarketListUI onLoadMore={onLoadMore} onClickToDetail={onClickToDetail} data={data} />;
}
