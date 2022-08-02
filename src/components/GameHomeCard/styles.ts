import styled from "styled-components";

export const GameHomeCard = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
  height: 300px;
  width: 350px;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 90%;
  }
`;
