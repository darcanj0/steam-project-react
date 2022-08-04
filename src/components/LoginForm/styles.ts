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

    section {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
    }

    #inputFields {
      display: flex;
      flex-direction: column;
      width: 70%;
      height: 70%;
      justify-content: space-between;
      gap: 15px;
    }

    .InputField {
      width: 100%;
      gap: 20px;
    }

    label {
      font-size: 1.5rem;
    }

    input {
      height: 30px;
      width: 100%;
      border-radius: ${theme.constants.defaultBorderRadius};
      border: 1px solid ${theme.colors.glassBorderColor};
      color: ${theme.colors.whiteTextColor};
      background-color: ${theme.colors.primaryColorOpacity};
      padding: 1rem 1rem;
      font-size: 1.2rem;
      font-family: ${theme.constants.defaultFontfamily};
      letter-spacing: 1px;
      text-align: left;
      ${theme.mixins.defaultGlass()}
    }

    #formBtns {
      margin: 20px;
    }
  `}
`;
