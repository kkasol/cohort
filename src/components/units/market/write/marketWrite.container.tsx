import { useState } from "react";
import MarketWriteUI from "./marketWrite.presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./marketWrite.queries";
import { Modal } from "antd";

interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: string;
  tags: string;
  // fileUrls: UseFieldArrayReturn;
  // useditemAddress: string;
}

export default function MarketWrite(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [useditemAddress, setUseditemAddress] = useState("");
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const schema = yup.object({
    name: yup.string().required("상품명을 입력해주세요."),
    remarks: yup
      .string()
      .required("상품 요약을 입력해주세요.")
      .max(100, "제목은 100자 이내입니다."),
    contents: yup.string().required(),
    price: yup
      .string()
      .required("가격을 입력해주세요.")
      .matches(/^[0-9]*$/, "숫자만 입력 가능합니다."),
    tags: yup.string().required("태그를 입력해주세요."),
    // useditemAddress: yup
    // images: yup.array().notRequired(),
  });

  const { register, handleSubmit, setValue, trigger } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: Address): void => {
    setUseditemAddress(data.address);
    setIsOpen((prev) => !prev);
  };

  const onSubmit = async (data: IFormData) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            // images: [...fileUrls],
          },
        },
      });
      Modal.success({ content: "상품 등록에 성공했습니다." });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <MarketWriteUI
      isOpen={isOpen}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      register={register}
      onChangeContents={onChangeContents}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isModalOpen={isModalOpen}
    />
  );
}
