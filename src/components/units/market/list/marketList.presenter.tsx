import * as S from "./marketList.styles";
import InfiniteScroll from "react-infinite-scroller";

interface MarketListUIProps {
  onLoadMore: any;
  onClickToDetail: any;
  data: any;
}

export default function MarketListUI(props: MarketListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.MarketList>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={true}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {props.data?.fetchUseditems?.map((el) => (
            <S.MarketBody key={el._id} onClick={() => props.onClickToDetail(el)} id={el._id}>
              <S.MarketBodyImage
                src={el.images[0] ? `https://storage.googleapis.com/${el.images[0]}` : undefined}
                noImage={!el.images[0]}
              />
              <S.MarketBodyId>{el.price}</S.MarketBodyId>
              <S.MarketBodyId>{el.name}</S.MarketBodyId>
              <S.MarketBodyDate>{el.remarks}</S.MarketBodyDate>
            </S.MarketBody>
          ))}
        </InfiniteScroll>
      </S.MarketList>
    </S.Wrapper>
  );
}
