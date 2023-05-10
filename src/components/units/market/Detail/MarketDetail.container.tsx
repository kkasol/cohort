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
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./MarketDetail.queries";
import { useState } from "react";
import { useAuth } from "../../../../commons/hooks/useAuth";
import { FETCH_USER_LOGGED_IN } from "../comment/commentWrite/commentWrite.queries";

export default function MarketDetail(): JSX.Element {
  useAuth();
  const router = useRouter();
  const [cartItems, setCartItems] = useState<IUseditem[]>([]);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

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
  const result = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const myData = result?.data?.fetchUserLoggedIn._id;
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(
    FETCH_USED_ITEM,
    {
      variables: {
        useditemId: `${router.query.useditemId}`,
      },
    }
  );

  const onClickPick = async () => {
    await toggleUseditemPick({
      variables: {
        useditemId: router.query.useditemId,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: {
            useditemId: `${router.query.useditemId}`,
          },
        },
      ],
    });
  };

  const onClickEdit = () => {
    void router.push(`/market/${router.query.useditemId}/edit`);
  };

  const onClickDelete = () => {
    const result = deleteUseditem({
      variables: { useditemId: router.query.useditemId },
    });
    router.push("/market");
  };

  const onClickBuy = async () => {
    const result = await createPointTransactionOfBuyingAndSelling({
      variables: {
        useritemId: router.query.useditemId,
      },
    });

    alert("상품이 구매되었습니다!");
  };

  return (
    <MarketDetailUI
      data={data}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
      onClickCart={onClickCart}
      onClickBuy={onClickBuy}
      myData={myData}
    />
  );
}
