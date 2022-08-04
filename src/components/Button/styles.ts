import styled, { css } from "styled-components";

export const DefaultButton = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.defaultButton("small")}
  `}
`;
