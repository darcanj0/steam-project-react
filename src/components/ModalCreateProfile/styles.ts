import styled, { css } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const ModalCreateProfile = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.tertiaryColorOpacity};
    ${theme.mixins.defaultGlass()}
    height: 500px;
    width: 500px;
    border: 1px solid ${theme.colors.glassBorderColor};
    border-radius: ${theme.constants.defaultBorderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    overflow: auto;

    section {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1.5rem;
      border-bottom: 1px solid ${theme.colors.glassBorderColor};

      a {
        ${theme.mixins.iconButtonStyle(false)}
      }

      span {
        ${theme.mixins.headingStyle}
        color: ${theme.colors.whiteTextColor};
        font-size: x-large;
      }
    }
  `}
`;

export const CloseModalIcon = styled(AiOutlineClose)`
  ${({ theme }) => css`
    ${theme.mixins.iconStyle()}
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
