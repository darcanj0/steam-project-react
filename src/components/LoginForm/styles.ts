import styled, { css } from "styled-components";

export const LoginForm = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.tertiaryColorOpacity};
    ${theme.mixins.defaultGlass()}
    ${theme.mixins.logoTitleStyle()}
    height: 600px;
    width: 60%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    border: 1px solid ${theme.colors.glassBorderColor};
    border-radius: ${theme.constants.defaultBorderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    section {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 70%;
      height: 70%;
      justify-content: space-between;
    }
  `}
`;
