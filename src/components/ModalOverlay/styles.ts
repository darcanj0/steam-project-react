import styled, { css } from "styled-components";

export const ModalOverlay = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.overlay()}
  `}
`;
