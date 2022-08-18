import styled, { css } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const ModalCreateProfile = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.tertiaryColorOpacity};
    ${theme.mixins.defaultGlass()}
    height: 500px;
    width: 450px;
    border: 1px solid ${theme.colors.glassBorderColor};
    border-radius: ${theme.constants.defaultBorderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    section {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1.5rem;

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
    ${theme.mixins.iconStyle}
  `}
`;
