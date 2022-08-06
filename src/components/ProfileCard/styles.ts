import styled, { css } from "styled-components";

export const ProfileCard = styled.a`
  ${({ theme }) => css`
    width: 250px;
    background: transparent;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    img {
      width: 80%;
      height: 200px;
      border-radius: 50%;
      border: 10px solid transparent;
      transition: all .3s ease;
    }

    p {
      ${theme.mixins.titleStyle()}
      font-weight: 400;
      margin: 10px;
    }

    :hover {
      img {
        border: 10px solid ${theme.colors.tertiaryColorOpacity};
      }
      p {
        color: ${theme.mixins.primaryColor};
      }
    }
  `}
`;
