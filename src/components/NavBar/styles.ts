import styled, { css } from "styled-components";

export const NavBar = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryColorOpacity};
    border: 1px solid ${theme.colors.glassBorderColor};
  `}
  border-radius: 0 5px 5px 0;
  height: 100vh;
  width: 56px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
