import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./MarketDetail.presenter";
import { IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM } from "./MarketDetail.queries";

export default function MarketDetail(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(
    FETCH_USED_ITEM,
    {
      variables: {
        useditemId: `${router.query.useditemId}`,
      },
    }
  );
  return <MarketDetailUI data={data} />;
}
