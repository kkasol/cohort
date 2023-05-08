import Modal from "react-modal";
import { useEffect, useState } from "react";
import Script from "next/script";
import styled from "@emotion/styled";

declare const window: typeof globalThis & {
  IMP: any;
};
const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 1);
  z-index: 9999;

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 500px;
  background-color: #fff;
  border: 1px solid #000;
  > div {
    font-size: 24px;
  }
`;

const Select = styled.select`
  padding: 10px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 400px;
`;

const Option = styled.option`
  font-size: 20px;

  ${({ selected }) =>
    !selected &&
    `
    color: #999;
  `}
`;

const ChargeModal = ({ isOpen, closeModal }) => {
  const [amount, setAmount] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    setModalIsOpen(isOpen);
  }, [isOpen]);

  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    const price = amount;
    const priceName = `${amount}원 충전`;

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: priceName,
        amount: price,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28/payment/completet",
      },
      (rsp: any) => {
        if (rsp.success === true) {
          console.log("aa");
        } else {
        }
      }
    );
  };

  const handleCharge = (e) => {
    e.preventDefault();
    onClickPayment();
    closeModal();
    setAmount(0);
    setModalIsOpen(false); // 충전 후 모달 닫기
  };

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Charge Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <Script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></Script>
      <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>
      <form onSubmit={handleCharge}>
        <Wrapper>
          <div>충전하실 금액을 선택해주세요!</div>
          <Select id="amount" onChange={handleAmountChange} defaultValue={""}>
            <Option value="" disabled>
              포인트 선택
            </Option>
            <Option value="100">100</Option>
            <Option value="500">500</Option>
            <Option value="2000">2,000</Option>
            <Option value="5000">5,000</Option>
          </Select>
          <button type="submit">충전하기</button>
        </Wrapper>
      </form>
    </StyledModal>
  );
};

export default ChargeModal;
