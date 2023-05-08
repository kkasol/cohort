import * as S from "./marketList.styles";
import InfiniteScroll from "react-infinite-scroller";

interface MarketListUIProps {
  onLoadMore: any;
  onClickToDetail: any;
  onChangeSearch: any;
  onClickCreate: any;
  data: any;
}

export default function MarketListUI(props: MarketListUIProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.TopWrapper>
          <S.TopTitle>BEST</S.TopTitle>
          <S.TopBody>
            {props.data?.fetchUseditems &&
              [...props.data?.fetchUseditems]
                ?.sort((a, b) => b.pickedCount - a.pickedCount)
                ?.slice(0, 4)
                ?.map((el) => (
                  <S.MarketBody key={el._id} onClick={() => props.onClickToDetail(el)} id={el._id}>
                    <S.MarketBodyImage
                      src={
                        el.images[0] ? `https://storage.googleapis.com/${el.images[0]}` : undefined
                      }
                      noImage={!el.images[0]}
                    />
                    <S.MarketBodyName>{el.name}</S.MarketBodyName>
                    <S.MarketBodyPrice>{el.price}</S.MarketBodyPrice>
                    <S.MarketBodyRemarks>{el.remarks}</S.MarketBodyRemarks>
                  </S.MarketBody>
                ))}
          </S.TopBody>
        </S.TopWrapper>
        <S.MarketList>
          <S.CreateBtn onClick={props.onClickCreate}>상품 등록</S.CreateBtn>
          <S.SearchInput>
            <S.Search
              type="text"
              onChange={props.onChangeSearch}
              placeholder="검색어를 입력해주세요"
            />
          </S.SearchInput>
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
                <S.MarketBodyPrice>{el.price}</S.MarketBodyPrice>
                <S.MarketBodyName>{el.name}</S.MarketBodyName>
                <S.MarketBodyRemarks>{el.remarks}</S.MarketBodyRemarks>
              </S.MarketBody>
            ))}
          </InfiniteScroll>
        </S.MarketList>
      </S.Wrapper>
    </>
  );
}
