import { LogoForContentBox } from "../Logo/styles";
import * as S from "./styles";

const ContentBox = (props: any) => {
  return (
    <S.ContentBox inDarkMode={false}>
      <div>
        <LogoForContentBox />
        <div></div>
      </div>
      {props.children}
    </S.ContentBox>
  );
};

export default ContentBox;
