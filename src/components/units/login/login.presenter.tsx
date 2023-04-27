import * as S from "./login.styles";
import { ChangeEvent, MouseEventHandler } from "react";
interface ILoginUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: MouseEventHandler<HTMLButtonElement>;
}
export default function LoginUI(props: ILoginUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>LOGIN</S.Title>
      <S.DivideLine />
      <S.Row>
        <S.InputWrapper>
          <S.Row>
            <S.Label>아이디</S.Label>
            <S.TextInput
              type="text"
              placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
              onChange={props.onChangeEmail}
            />
          </S.Row>
          <S.Row>
            <S.Label>비밀번호</S.Label>
            <S.TextInput
              type="password"
              placeholder="영문+숫자 조합 8~16자리를 입력해주세요"
              onChange={props.onChangePassword}
            />
          </S.Row>
        </S.InputWrapper>
        <S.LoginBtnWrapper>
          <S.LoginBtn onClick={props.onClickLogin}>로그인</S.LoginBtn>
        </S.LoginBtnWrapper>
      </S.Row>
    </S.Wrapper>
  );
}
