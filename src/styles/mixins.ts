import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";

const headingStyle = (dark = false) => css`
  font-family: ${constants.defaultFontfamily};
  color: ${dark ? colors.darkTextColor : colors.whiteTextColor};
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

const contentBox = (darkTextColor = false) => css`
  min-height: 100vh;
  width: calc(100% - 58px);
  justify-self: flex-end;
  padding: 30px;
  border: 5px solid red;
  ${headingStyle(darkTextColor)}
`;

export const mixins = {
  headingStyle,
  overlay,
  secondaryBackgroundBox,
  contentBox,
};
