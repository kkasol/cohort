import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 80px;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #999;
  margin-top: 100px;
`;

export const TopTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  font-size: 24px;
`;

export const TopBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const MarketList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
`;

export const CreateBtn = styled.button`
  width: 160px;
  height: 72px;
  background-color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export const SearchInput = styled.div``;

export const Search = styled.input``;

export const MarketBody = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 30px;
  cursor: pointer;
`;

export const MarketBodyImage = styled.img<{ noImage?: boolean }>`
  width: 100%;
  height: ${({ noImage }) => (noImage ? "600px" : "600px")};
  object-fit: contain;
  background-color: ${({ noImage }) => (noImage ? "#c4c4c4" : "none")};
`;

export const MarketBodyPrice = styled.div``;

export const MarketBodyName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MarketBodyRemarks = styled.div`
  font-size: 14px;
  color: #9b9b9b;
`;
