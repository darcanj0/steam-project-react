import styled, { css } from "styled-components";

export const OptionsList = styled.div`
  ${({ theme }) => css`
    width: 20%;
    height: 100%;
    overflow: auto;
    border: 1px solid ${theme.colors.glassBorderColor};
    border-radius: ${theme.constants.defaultBorderRadius} 0 0
      ${theme.constants.defaultBorderRadius};
  `}
`;
