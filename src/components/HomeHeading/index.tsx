import * as S from "./styles";

interface HomeHeadingProps {
  inLightMode: boolean;
  children: any;
}

const HomeHeading = (props: HomeHeadingProps) => {
  return <S.HomeHeading>{props.children}</S.HomeHeading>;
};

export default HomeHeading;
