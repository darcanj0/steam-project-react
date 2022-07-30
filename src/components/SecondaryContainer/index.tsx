import * as S from "./styles";

interface SecondaryContainerProps {
  light: boolean;
}

const SecondaryContainer = (props: SecondaryContainerProps) => {
  return <S.SecondaryContainer light={props.light}></S.SecondaryContainer>;
};

export default SecondaryContainer;
