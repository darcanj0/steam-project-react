import styled from "styled-components";

export const Footer = styled.footer`
  height: 50px;
  width: calc(100% - 56px);
  transform: translateX(56px);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.mixins.defaultGlass()}
  ${({ theme }) => theme.mixins.footerStyle()}
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;
