import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 50px 0px 50px;
`;

export const ImageWrapper = styled.div`
  width: 1200px;
  height: 800px;
  position: relative;
`;

export const Images = styled.img`
  width: 1200px;
  height: 800px;
  object-fit: cover;
`;

export const Remark = styled.div`
  font-size: 12px;
`;

export const Name = styled.div`
  font-size: 40px;
  margin-bottom: 50px;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Pick = styled.div`
  align-self: flex-end;
`;

export const DivideLine = styled.div`
  border-bottom: 3px solid rgba(85, 85, 85, 1);
  margin: 20px 0px 30px 0px;
`;

export const Contents = styled.div``;

export const Tags = styled.div`
  margin-top: 30px;
  color: red;
`;

export const DivideLineRegular = styled.div`
  margin: 20px 0px;
  border-bottom: 1px solid rgba(192, 192, 192, 1);
`;

export const BtnSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const BuyBtn = styled.button`
  width: 210px;
  height: 50px;
  margin-right: 10px;
  font-size: 24px;
  background-color: black;
  color: white;
  border: none;
`;

export const PickBtn = styled.button`
  width: 300px;
  height: 50px;
  font-size: 24px;
  background-color: gray;
  color: white;
  border: none;
`;

export const CommentWrapper = styled.div``;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 120px;
  font-size: 40px;
  font-weight: bold;
`;
