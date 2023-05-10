import { IQuery } from "../../../../commons/types/generated/types";
import * as S from "./MarketDetail.styles";
import { useRouter } from "next/router";
import MarketCommentWrite from "../comment/commentWrite/commentWrite.container";
import MarketCommentDetail from "../comment/commentDetail/commentDetail.container";
import { AiFillHeart } from "react-icons/ai";

interface IMarketDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickEdit: any;
  onClickDelete: any;
  onClickBuy: any;
  onClickCart: any;
  onClickPick: any;
  myData: any;
}

export default function MarketDetailUI(props: IMarketDetailUIProps): JSX.Element {
  const router = useRouter();

  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.Row>
            <S.ImageWrapper>
              <S.Images
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
              />
            </S.ImageWrapper>
            <S.Column>
              <S.Remark>{props.data?.fetchUseditem.remarks}</S.Remark>
              <S.Row>
                <S.Name>{props.data?.fetchUseditem.name}</S.Name>
                {props.myData === props.data?.fetchUseditem?.seller?._id && (
                  <>
                    <S.EditBtn onClick={props.onClickEdit}>수정하기</S.EditBtn>
                    <S.DeleteBtn onClick={props.onClickDelete}>삭제하기</S.DeleteBtn>
                  </>
                )}
              </S.Row>
              <S.Price>
                <S.Row>
                  <p style={{ marginRight: "50px" }}>판매가</p>
                  <p>{props.data?.fetchUseditem.price}원</p>
                </S.Row>
                <S.PickToggle onClick={props.onClickPick}>
                  My
                  <AiFillHeart
                    style={{
                      color: props.data?.fetchUseditem.pickedCount === 0 ? "black" : "red",
                      margin: "0px 8px",
                    }}
                  />
                  Product
                </S.PickToggle>
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
