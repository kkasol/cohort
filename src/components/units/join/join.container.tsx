import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USER } from "./join.queries";
import { schema } from "./join.validation";
import { IMutation, IMutationCreateUserArgs } from "../../../commons/types/generated/types";
import * as S from "./join.styles";

type JoinForm = {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
};

export default function Join(): JSX.Element {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinForm>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUser] = useMutation<Pick<IMutation, "createUser">, IMutationCreateUserArgs>(
    CREATE_USER
  );

  const onSubmit = async (data: JoinForm): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      console.log(result);
      router.push("/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Wrapper>
        <S.Title>JOIN MEMBER</S.Title>
        <S.DivideLine />
        <S.Row>
          <S.InputTitle>아이디</S.InputTitle>
          <S.TextInput
            {...register("email")}
            type="text"
            placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </S.Row>
        <S.Row>
          <S.InputTitle>비밀번호</S.InputTitle>
          <S.TextInput
            {...register("password")}
            type="password"
            placeholder="영문+숫자 조합 8~16자리를 입력해주세요"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </S.Row>
        <S.Row>
          <S.InputTitle>비밀번호 확인</S.InputTitle>
          <S.TextInput type="password" placeholder="영문+숫자 조합 8~16자리를 입력해주세요" />
          {errors.passwordCheck && <span>{errors.passwordCheck.message}</span>}
        </S.Row>
        <S.Row>
          <S.InputTitle>이름</S.InputTitle>
          <S.TextInput {...register("name")} type="text" placeholder="Ex) 홍길동" />
          {errors.name && <span>{errors.name.message}</span>}
        </S.Row>
        <S.DivideLine />
        <S.FinishBtn>
          <button>취소</button>
          <button>확인</button>
        </S.FinishBtn>
      </S.Wrapper>
    </form>
  );
}
