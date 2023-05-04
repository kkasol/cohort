import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../types/generated/types";
const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
const TitleIcon = styled.img`
  margin-left: 30px;
`;
const MemberTitle = styled.div``;
const SignUpBtn = styled.button`
  background-color: white;
  border: none;
`;
const LoginBtn = styled.button`
  background-color: white;
  border: none;
`;
export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickSignUp = (): void => {
    router.push("/join");
  };
  const onClickLogin = (): void => {
    router.push("/login");
  };

  return (
    <Wrapper>
      <TitleIcon src="/dingco.png" />
      <div>
        <MemberTitle>{data?.fetchUserLoggedIn?.name} 님 환영합니다!</MemberTitle>
        <SignUpBtn onClick={onClickSignUp}>회원가입</SignUpBtn>
        <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
      </div>
    </Wrapper>
  );
}
