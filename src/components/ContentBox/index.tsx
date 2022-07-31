import * as S from "./styles";

const ContentBox = (props: any) => {
  return <S.ContentBox inDarkMode={false}>{props.children}</S.ContentBox>;
};

export default ContentBox;
