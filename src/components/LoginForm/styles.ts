import styled, { css } from "styled-components";

export const LoginForm = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.tertiaryColorOpacity};
    ${theme.mixins.defaultGlass()}
    ${theme.mixins.logoTitleStyle()}
    height: 37.5rem;
    width: 50%;
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
    overflow-y: auto;

    section {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3.125rem;
      margin: 1.25rem 0;
    }

    #inputFields {
      display: flex;
      flex-direction: column;
      width: 70%;
      height: 70%;
      justify-content: space-between;
      gap: 0.938rem;
    }

    .InputField {
      width: 100%;
      gap: 20px;
    }

    label {
      font-size: 1.2rem;
    }

    #formBtns {
      margin: 20px;
    }
  `}
`;

export const FormErrors = styled.p`
  ${({ theme }) => css`
    ${theme.mixins.titleStyle()}
    font-size: medium;
    color: red;
    align-self: center;
  `}
`;
