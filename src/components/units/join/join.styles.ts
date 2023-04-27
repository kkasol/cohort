import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 80px;
`;

export const Title = styled.div`
  font-size: 40px;
  margin-bottom: 80px;
`;
export const DivideLine = styled.div`
  width: 100%;
  border: 1px solid;
  margin-top: 20px;
  margin-bottom: 40px;
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const InputTitle = styled.div`
  width: 150px;
  font-size: 18px;
  margin-bottom: 12px;
`;
export const TextInput = styled.input`
  height: 50px;
  width: 45%;
  font-size: 19px;
  margin-bottom: 20px;
  background-color: #e9e9e9;
  border: none;
  padding-left: 20px;
`;

export const FinishBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  > button:first-child {
    width: 120px;
    height: 40px;
    margin-right: 20px;
    font-size: 16px;
    font-weight: bold;
    background-color: white;
    border: 1px solid;
  }
  > button:last-child {
    width: 120px;
    font-size: 16px;
    font-weight: bold;
    background-color: black;
    color: white;
    border: none;
  }
`;

export const SignUpBTN = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 15px;
  border: none;
  margin-top: 15px;
`;
