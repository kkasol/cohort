import { IQuery } from "../../../../commons/types/generated/types";
import * as S from "./MarketDetail.styles";
import Slider from "react-slick";
import { useRouter } from "next/router";
import MarketCommentWrite from "../comment/commentWrite/commentWrite.container";
import MarketCommentDetail from "../comment/commentDetail/commentDetail.container";

interface IMarketDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickBuy: any;
  onClickCart: any;
}

export default function MarketDetailUI(props: IMarketDetailUIProps): JSX.Element {
  const router = useRouter();
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.Row>
            <S.ImageWrapper>
              <Slider {...settings}>
                {props.data?.fetchUseditem.images
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <S.Images key={el} src={`https://storage.googleapis.com/${el}`} />
                  ))}
              </Slider>
            </S.ImageWrapper>
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
                <S.BuyBtn onClick={props.onClickBuy}>BUY NOW</S.BuyBtn>
                <S.PickBtn onClick={props.onClickCart(router.query)}>SHOPPING BAG</S.PickBtn>
              </S.BtnSection>
            </S.Column>
          </S.Row>
        </S.ContentWrapper>
        <S.CommentWrapper>
          <S.Title>Q&A</S.Title>
          <S.DivideLine />
          <MarketCommentWrite />
          <MarketCommentDetail />
        </S.CommentWrapper>
      </S.Wrapper>
    </>
  );
}
