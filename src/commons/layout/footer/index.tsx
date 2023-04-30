import styled from "@emotion/styled";

export default function LayoutFooter(): JSX.Element {
  const Wrapper = styled.div``;
  const TitleIcon = styled.img``;
  const TitleInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;
  `;
  const TitleContents = styled.div``;
  const ContentsGap = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
  `;
  return (
    <Wrapper>
      <TitleIcon src="/dingco.png" />
      <TitleInfo>
        <p>(주)딩코</p>
        <p>대표: 안우엽</p>
      </TitleInfo>
      <TitleContents>
        <p>사업자등록번호 717-87-02373</p>
        <p>주소: 서울특별시 구로구 디지털로 300, 패스트파이브</p>
        <p>학원등록번호: 제5845호</p>
        <ContentsGap>
          <p>개인정보 처리방침</p>
          <p> 서비스 이용 약관</p>
        </ContentsGap>
        <p>Copyrightⓒ2022.Dingco Corp., Ltd.</p>
      </TitleContents>
    </Wrapper>
  );
}
