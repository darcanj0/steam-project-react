import * as S from "./styles";

interface DefaultBoxProps {
  light: boolean;
}

const DefaultBox = (props: DefaultBoxProps) => {
  return <S.DefaultBox light={props.light}></S.DefaultBox>;
};

export default DefaultBox;
