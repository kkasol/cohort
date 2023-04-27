import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text";
  register: UseFormRegisterReturn;
  placeholder?: string;
}

export default function WriteInput(props: IInputProps): JSX.Element {
  return (
    <input
      type={props.type ?? "text"}
      {...props.register}
      style={{
        width: "100%",
        height: "50px",
        paddingLeft: "15px",
        backgroundColor: "#e9e9e9",
        border: "#e9e9e9",
      }}
    />
  );
}
