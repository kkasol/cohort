import styled from "@emotion/styled";
import { Rate, Modal } from "antd";
export const Wrapper = styled.div`
  height: 150px;
  width: 1200px;
  overflow: auto;
`;
export const WriterImage = styled.img`
  margin-right: 15px;
  width: 40px;
  height: 40px;
`;

export const Comment = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;
export const CommentColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentWriter = styled.div`
  width: 100px;
  height: 150%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-right: 50px;
`;

export const CommentContents = styled.div`
  font-size: 16px;
`;

export const CommentDate = styled.div`
  margin-right: 20px;
  font-size: 12px;
`;

export const CommentUtil = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentIcon = styled.img`
  :hover {
    cursor: pointer;
  }
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

export const CommentDelete = styled.img`
  :hover {
    cursor: pointer;
  }
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

export const Line = styled.div`
  border-top: 1px solid #bdbdbd;
  margin: 20px 0px 20px 0px;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
