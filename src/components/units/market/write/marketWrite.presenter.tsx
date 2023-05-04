import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import * as S from "./marketWrite.styles";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import KakaoMapPage from "../../../../commons/library/kakaomap";
import WriteInput from "../../../../commons/inputs/writeInput";
import Uploads01 from "../../../../commons/uploads/01/Uploads01.container";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

interface IMarketWriteUIProps {
  isOpen: boolean;
  onClickAddressSearch: any;
  onCompleteAddressSearch: any;
  onChangeContents: any;
  register: any;
  handleSubmit: any;
  onSubmit: any;
  isModalOpen: boolean;
  useditemAddress: string;
  fileUrls: string[];
  onChangeFileUrls: any;
}

export default function MarketWriteUI(props: IMarketWriteUIProps): JSX.Element {
  return (
    <form>
      {props.isOpen && (
        <S.AddressModal visible={true}>
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.Title>상품 등록</S.Title>
        <S.DivideLineBold />
        <S.Row>
          <S.Label>상품명</S.Label>
          <WriteInput placeholder="상품명을 작성해주세요" register={props.register("name")} />
        </S.Row>
        <S.DivideLine />
        <S.Row>
          <S.Label>상품 요약</S.Label>
          <WriteInput placeholder="상품 요약을 작성해주세요" register={props.register("remarks")} />
        </S.Row>
        <S.DivideLine />
        <S.Row>
          <S.Label>상품 내용</S.Label>
          <ReactQuill
            style={{ width: "100%", height: "280px", marginBottom: "40px" }}
            placeholder="상품을 설명해주세요"
            onChange={props.onChangeContents}
          />
        </S.Row>
        <S.DivideLine />
        <S.Row>
          <S.Label>판매 가격</S.Label>
          <WriteInput placeholder="판매 가격을 입력해주세요" register={props.register("price")} />
        </S.Row>
        <S.DivideLine />
        <S.Row>
          <S.Label>태그 입력</S.Label>
          <WriteInput placeholder="#태그 #태그 #태그" register={props.register("tags")} />
        </S.Row>
        <S.DivideLine />
        <S.Label>브랜드 위치</S.Label>
        <KakaoMapPage address={props.useditemAddress} />
        <S.Search type="button" onClick={props.onClickAddressSearch}>
          우편번호 검색
        </S.Search>
        {props.isModalOpen && <Modal title="주소 검색" open={true}></Modal>}
        <S.DivideLine />
        <S.Label>사진 첨부</S.Label>
        <S.ImageBox>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.ImageBox>
        <S.DivideLineBold />
        <S.BtnSection>
          <button type="button">취소</button>
          <button onClick={props.handleSubmit(props.onSubmit)}>등록</button>
        </S.BtnSection>
      </S.Wrapper>
    </form>
  );
}
