import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./MarketDetail.presenter";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USED_ITEM,
} from "./MarketDetail.queries";
import { useState } from "react";

export default function MarketDetail(): JSX.Element {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<IUseditem[]>([]);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const onClickCart = (cartItem: IUseditem) => (event: MouseEvent) => {
    const storedCartItems: IUseditem[] = JSON.parse(localStorage.getItem("cartItems") ?? "[]");
    const temp = storedCartItems.filter((el) => el._id === cartItem._id);
    if (temp.length >= 1) {
      return;
    }
    const updatedCartItems = [...storedCartItems, cartItem];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const { data } = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(
    FETCH_USED_ITEM,
    {
      variables: {
        useditemId: `${router.query.useditemId}`,
      },
    }
  );

  const onClickBuy = async () => {
    const result = await createPointTransactionOfBuyingAndSelling({
      variables: {
        useritemId: router.query.useditemId,
      },
    });

    alert("상품이 구매되었습니다!");
  };

  return <MarketDetailUI data={data} onClickCart={onClickCart} onClickBuy={onClickBuy} />;
}
