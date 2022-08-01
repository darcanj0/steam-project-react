import { LogoForContentBox } from "../Logo/styles";
import * as S from "./styles";

interface ContentBoxProps {
  inLightMode?: boolean;
  children: any;
}

const ContentBox = (props: ContentBoxProps) => {
  return (
    <S.ContentBox>
      <div>
        <LogoForContentBox inLightMode={props.inLightMode} />
        <div></div>
      </div>
      {props.children}
    </S.ContentBox>
  );
};

export default ContentBox;
