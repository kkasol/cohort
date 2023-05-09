import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IUseditemQuestionAnswer,
} from "../../../../../commons/types/generated/types";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "./commentWrite.queries";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { Dispatch, SetStateAction } from "react";
import { FETCH_USED_ITEM_QUESTIONS } from "../commentDetail/commentDetail.queries";
import * as S from "./commentWrite.styles";
export interface IMarketCommentAnswer {
  isAnswer?: boolean;
  setIsAnswer?: Dispatch<SetStateAction<boolean>>;
  el?: IUseditemQuestionAnswer;
}

export default function MarketCommentAnswer(props: IMarketCommentAnswer): JSX.Element {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const [result] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onClickAnswerSubmit = async (): Promise<void> => {
    try {
      if (contents === "") {
        alert("내용이 입력되지 않았습니다.");
      }
      await result({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setContents("");
  };

  return (
    <>
      <S.CommentWrapper>
        {props.isAnswer === false && <></>}
        <S.CommentTitle>
          <span>댓글</span>
        </S.CommentTitle>

        <S.CommentContents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 
      무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 
      이에 대한 민형사상 책임은 게시자에게 있습니다"
          onChange={onChangeContents}
        ></S.CommentContents>
        <S.CommentSignUp>
          <S.CountLength>
            {contents !== "" ? contents.length : props.el?.contents.length ?? 0}
            /100
          </S.CountLength>
          <S.SignUpBtn onClick={onClickAnswerSubmit}>등록하기</S.SignUpBtn>
        </S.CommentSignUp>
      </S.CommentWrapper>
    </>
  );
}
