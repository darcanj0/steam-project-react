import styled, { css } from "styled-components";

export const SwiperContainerProfileSelection = styled.div`
  width: 80%;
  height: 250px;
  background-color: transparent;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  display: flex;
`;

export const TitleProfileSelection = styled.h2`
  ${({ theme }) => css`
    ${theme.mixins.logoTitleStyle()}
    font-weight: 400;
    font-size: 1.8rem;
    text-align: center;
    padding: 4rem 1rem;
  `}
`;
