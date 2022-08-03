import styled, { css } from "styled-components";
import { Theme } from "../../styles/styled-components";

interface SwiperContainerProps {
  theme?: Theme;
}

export const SwiperContainer = styled.section<SwiperContainerProps>`
  ${({ theme }) => css`
    ${theme.mixins.defaultGlass()}
    background: ${theme.colors.secondaryColorOpacity};
    width: 90%;
    height: 300px;
    border: 1px solid ${theme.colors.glassBorderColor};
    margin: 30px auto;
    border-radius: ${theme.constants.defaultBorderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
  `}
`;
