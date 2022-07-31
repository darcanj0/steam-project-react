import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";

const headingStyle = (inDarkMode = true) => css`
  font-family: ${constants.defaultFontfamily};
  color: ${inDarkMode ? colors.whiteTextColor : colors.darkTextColor};
  font-size: ${constants.headingTextSize};
  font-weight: 400;
`;

const overlay = () => css`
  background: rgba(0, 0, 0, 0.6);
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

export const mixins = {
  headingStyle,
  overlay,
  secondaryBackgroundBox,
  defaultGlass,
};
