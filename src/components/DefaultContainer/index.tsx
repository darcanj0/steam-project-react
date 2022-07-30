import * as S from "./styles";

interface DefaultContainerProps {
  light: boolean;
}

const DefaultContainer = (props: DefaultContainerProps) => {
  return <S.DefaultContainer light={props.light}></S.DefaultContainer>;
};

export default DefaultContainer;
