import styled, { css } from "styled-components";

export const SecondaryContainer = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    background-image: ${(props) =>
      props.light ? theme.constants.bg2Light : theme.constants.bg2Dark};
  `}
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
