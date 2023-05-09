import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const CommentContents = styled.textarea`
  width: 100%;
  height: 180px;
  font-size: 20px;
  resize: none;
  border: 1px solid #bdbdbd;
  padding: 30px;
`;
export const CommentSubmit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border: 1px solid #bdbdbd;
  border: none;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 10px;
`;
export const SubmitBtn = styled.button`
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: gray;
  }
  width: 150px;
  height: 55px;
  border: none;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
`;
