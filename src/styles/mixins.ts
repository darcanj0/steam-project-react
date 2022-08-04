import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";

const headingStyle = (inLightMode = false) => css`
  font-family: ${constants.defaultFontfamily};
  color: ${inLightMode ? colors.darkTextColor : colors.whiteTextColor};
  font-size: ${constants.headingTextSize};
  font-weight: 400;
`;

const titleStyle = () => css`
  font-family: ${constants.defaultFontfamily};
  color: ${colors.whiteTextColor};
  font-size: ${constants.titleStyle};
  font-weight: 700;
`;

const logoTitleStyle = () => css`
  font-family: ${constants.defaultFontfamily};
  color: ${colors.whiteTextColor};
  font-size: ${constants.logoTitle};
  font-weight: 400;
`;

const footerStyle = () => css`
  font-family: ${constants.defaultFontfamily};
  font-weight: 400;
  color: ${colors.whiteTextColor};
  letter-spacing: 0.2px;
`;

const overlay = () => css`
  background: rgba(0, 0, 0, 0.1);
`;

const secondaryBackgroundBox = (light = false) => css`
  min-height: 100vh;
  width: 100%;
  background-color: ${colors.primaryColor};

  background-image: ${light ? constants.bg2Light : constants.bg2Dark};

  background-repeat: no-repeat;
  background-size: cover;
`;

const defaultGlass = () => css`
  -webkit-backdrop-filter: blur(${constants.glassBlur});
  backdrop-filter: blur(${constants.glassBlur});
`;

const defaultButton = (btnSize = "small") => css`
  height: 45px;
  width: 400px;
  background-color: transparent;
  border: 3px solid ${colors.primaryColorOpacity};
  border-radius: ${constants.defaultBorderRadius};
  cursor: pointer;
  transition: all .3s ease;
  color: ${colors.whiteTextColor};
  font-family: ${constants.defaultFontfamily};
  font-size: 1.5rem;
  font-weight: 400;

  :hover {
    background-color: ${colors.primaryColor};
  }
`;

export const mixins = {
  headingStyle,
  footerStyle,
  overlay,
  secondaryBackgroundBox,
  defaultGlass,
  titleStyle,
  logoTitleStyle,
  defaultButton,
};
