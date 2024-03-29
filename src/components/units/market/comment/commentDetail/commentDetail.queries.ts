import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      contents
      createdAt
      _id
      user {
        name
        _id
      }
    }
  }
`;

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswer($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(page: $page, useditemQuestionId: $useditemQuestionId) {
      _id
      contents
    }
  }
`;
