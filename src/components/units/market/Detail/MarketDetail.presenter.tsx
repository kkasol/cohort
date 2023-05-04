import { IQuery } from "../../../../commons/types/generated/types";
import * as S from "./MarketDetail.styles";

interface IMarketDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
}

export default function MarketDetailUI(props: IMarketDetailUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Row>
        <S.ImageWrapper></S.ImageWrapper>
        <S.Column>
          <S.Remark>{props.data?.fetchUseditem.remarks}</S.Remark>
          <S.Name>{props.data?.fetchUseditem.name}</S.Name>
          <S.Price>
            <S.Row>
              <p style={{ marginRight: "50px" }}>판매가</p>
              <p>{props.data?.fetchUseditem.price}원</p>
            </S.Row>
            <S.Pick>MY 찜들어감</S.Pick>
          </S.Price>
          <S.DivideLine />
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: props.data?.fetchUseditem?.contents,
            }}
          />
          <S.Tags>{props.data?.fetchUseditem.tags}</S.Tags>
          <S.DivideLineRegular />
          <S.BtnSection>
            <S.BuyBtn>BUY NOW</S.BuyBtn>
            <S.PickBtn>SHOPPING BAG</S.PickBtn>
          </S.BtnSection>
        </S.Column>
      </S.Row>
    </S.Wrapper>
  );
}
