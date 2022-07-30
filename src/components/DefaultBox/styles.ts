import styled, { css } from "styled-components";

export const DefaultBox = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    background-image: ${(props) =>
      props.light ? theme.constants.bg1Light : theme.constants.bg1Dark};
  `}
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
