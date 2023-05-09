import * as S from "./commentWrite.styles";
import { ChangeEvent } from "react";
import { IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface IBoardCommentWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentSubmit: () => void;
  onClickCommentUpdate: () => void;
  contents: string;
  isEdit?: boolean;
  el?: IUseditemQuestion;
}

export default function MarketCommentWriteUI(props: IBoardCommentWriteUIProps): JSX.Element {
  return (
    <>
      <S.CommentWrapper>
        {props.isEdit === false && <></>}

        <S.CommentContents
          maxLength={100}
          placeholder="내용을 입력해주세요."
          onChange={props.onChangeContents}
          value={props.contents !== "" ? props.contents : props.el?.contents ?? ""}
        ></S.CommentContents>
        <S.CommentSubmit>
          <S.SubmitBtn
            onClick={
              props.isEdit === true ? props.onClickCommentUpdate : props.onClickCommentSubmit
            }
          >
            {props.isEdit === true ? "수정하기" : "작성하기"}
          </S.SubmitBtn>
        </S.CommentSubmit>
      </S.CommentWrapper>
    </>
  );
}
