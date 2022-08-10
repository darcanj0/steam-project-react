import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <S.DefaultButton {...props}>{children}</S.DefaultButton>;
};

export default Button;
