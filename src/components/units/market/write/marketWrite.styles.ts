import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export const Wrapper = styled.div`
  margin: 80px;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  margin: 0px 0px 15px 20px;
`;

export const DivideLineBold = styled.div`
  width: 100%;
  border-bottom: 3px solid #555555;
  margin-bottom: 20px;
`;

export const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #999999;
  margin: 20px 0px;
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  > input {
    width: 100%;
    height: 50px;
    padding-left: 15px;
    background-color: #e9e9e9;
    border: #e9e9e9;
  }
`;
export const Label = styled.div`
  width: 220px;
  font-size: 24px;
  font-weight: 500;
`;

export const Search = styled.button`
  width: 110px;
  height: 40px;
  background-color: black;
  color: white;
  border: none;
`;

export const BtnSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 20px;
  margin-top: 50px;
  > button {
    width: 100px;
    height: 40px;
    border: 1px solid;
  }
  > button:first-child {
    background-color: white;
    margin-right: 10px;
  }
  > button:last-child {
    background-color: black;
    color: white;
  }
`;

export const AddressModal = styled(Modal)``;
export const AddressSearchInput = styled(DaumPostcode)``;
