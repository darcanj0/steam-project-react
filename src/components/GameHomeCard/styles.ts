import styled, { keyframes } from "styled-components";

const divOverlayAnimation = keyframes`
  0%{
    transform: translateY(50px);
  }
  100%{
    transform: translateY(0px);
  }
`;

export const GameHomeCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColorOpacity};
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.glassBorderColor};
  ${({ theme }) => theme.mixins.defaultGlass()}

  img {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    ${({ theme }) => theme.mixins.titleStyle()}
    position: absolute;
    transition: all 0.5s ease;
    height: 100%;
    width: 100%;

    p,
    span {
      opacity: 0%;
      transition: all 0.5s ease;
    }
  }

  :hover {
    div {
      background: ${({ theme }) => theme.colors.primaryColorOpacity};
      animation: ${divOverlayAnimation} 0.3s ease;
      p,
      span {
        opacity: 100%;
        display: block;
      }

      span {
        font-weight: 400;
      }
    }
  }
`;
