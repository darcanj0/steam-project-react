import { InputHTMLAttributes } from "react";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "small" | "large";
}

const Input = ({ inputSize, ...props }: InputProps) => {
  return <S.Input inputSize={inputSize} {...props} />;
};

export default Input;
