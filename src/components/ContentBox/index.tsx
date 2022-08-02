import { LogoForContentBox } from "../Logo/styles";
import * as S from "./styles";

interface ContentBoxProps {
  inLightMode?: boolean;
  children: any;
}

const ContentBox = (props: ContentBoxProps) => {
  return (
    <S.ContentBox>
      <div id="logoAndPic">
        <LogoForContentBox inLightMode={props.inLightMode} />
        <div id="profilePicture"></div>
      </div>
      {props.children}
    </S.ContentBox>
  );
};

export default ContentBox;
