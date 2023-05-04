import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: calc(100vh - 422px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 50px;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
  font-size: 40px;
`;

export const DivideLine = styled.div`
  width: 100%;
  border: 1px solid;
  margin-top: 25px;
  margin-bottom: 100px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  width: 80px;
  margin-right: 10px;
  font-size: 18px;
`;

export const TextInput = styled.input`
  width: 600px;
  height: 50px;
  font-size: 19px;
  background-color: #e9e9e9;
  border: none;
`;
export const LoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const LoginBtn = styled.button`
  width: 140px;
  height: 120px;
  font-size: 20px;
  border: none;
  background-color: black;
  color: white;
  margin-left: 20px;
`;
