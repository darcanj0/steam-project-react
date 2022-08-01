import styled from "styled-components";

export const ContentBox = styled.div`
  min-height: calc(100vh - 50px);
  width: calc(100% - 58px);
  padding: 30px;
  transform: translateX(56px);

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;

    div {
      background-color: #fffcff;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;
