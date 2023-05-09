import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import type { MouseEvent } from "react";
import type {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IQuery,
} from "../../../../../commons/types/generated/types";

import { DELETE_USED_ITEM_QUESTION, FETCH_USED_ITEM_QUESTIONS } from "./commentDetail.queries";
import * as S from "./commentDetail.styles";
import { useRouter } from "next/router";
import { IUseditemQuestion } from "../../../../../../src/commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../commentWrite/commentWrite.queries";
import MarketCommentWrite from "../commentWrite/commentWrite.container";
import MarketCommentAnswer from "../commentWrite/commentAnswer.index";
export interface IMarketCommentFinishUIItemProps {
  el: IUseditemQuestion;
}

export default function MarketCommentDetailUIItem(
  props: IMarketCommentFinishUIItemProps
): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  const onClickAnswer = (commentId: string): void => {
    setIsAnswer(true);
  };

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      const confirmed = confirm("댓글을 삭제하시겠습니까?");
      if (confirmed) {
        await deleteUseditemQuestion({
          variables: {
            useditemQuestionId: props.el._id,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: { useditemId: router.query.useditemId },
            },
          ],
        });
        setIsOpenDeleteModal(false);
      }
    } catch (error) {
      if (error instanceof Error) alert("댓글 삭제에 실패했습니다.");
    }
  };
  const renderCommentIcon = () => {
    const userId = data?.fetchUserLoggedIn?._id;

    if (props.el.user._id === userId) {
      return (
        <>
          <S.CommentIcon src="/commentEdit.png" onClick={onClickUpdate} id={props.el._id} />
          <S.CommentIcon src="/commentDelete.png" onClick={onClickDelete} id={props.el._id} />
        </>
      );
    } else {
      return (
        <S.CommentIcon
          src="/commentAnswer.png"
          onClick={() => onClickAnswer(props.el._id)}
          id={props.el._id}
        />
      );
    }
  };

  return (
    <>
      {!isEdit && !isAnswer ? (
        <S.Wrapper>
          <S.Comment key={props.el._id}>
            <S.CommentRow>
              <S.CommentHeader>
                <S.CommentWriter>{props.el.user.name}</S.CommentWriter>
                <S.CommentContents>{props.el.contents}</S.CommentContents>
              </S.CommentHeader>
              <S.CommentHeader>
                <S.CommentDate>{props.el.createdAt.slice(0, 10)}</S.CommentDate>
                <S.CommentUtil>{renderCommentIcon()}</S.CommentUtil>
              </S.CommentHeader>
            </S.CommentRow>
          </S.Comment>
          <S.Line />
        </S.Wrapper>
      ) : isEdit ? (
        <MarketCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      ) : isAnswer ? (
        <>
          <S.Wrapper>
            <S.Comment key={props.el._id}>
              <S.CommentRow>
                <S.CommentHeader>
                  <S.CommentWriter>{props.el.user.name}</S.CommentWriter>
                  <S.CommentContents>{props.el.contents}</S.CommentContents>
                </S.CommentHeader>
                <S.CommentHeader>
                  <S.CommentDate>{props.el.createdAt.slice(0, 10)}</S.CommentDate>
                  <S.CommentUtil>
                    <S.CommentIcon
                      src="/commentAnswer.png"
                      onClick={onClickAnswer}
                      id={props.el._id}
                    />
                  </S.CommentUtil>
                </S.CommentHeader>
              </S.CommentRow>
            </S.Comment>
            <S.Line />
          </S.Wrapper>
          <MarketCommentAnswer isAnswer={true} setIsAnswer={setIsAnswer} el={props.el} />
        </>
      ) : null}
    </>
  );
}
