import * as S from "./styles";

interface ButtonProps {
  onClick: () => void;
  children: any;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <S.DefaultButton onClick={onClick}>{children}</S.DefaultButton>;
};

export default Button;
