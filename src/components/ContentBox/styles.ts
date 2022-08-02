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
    margin: 0 0 40px 0;

    #profilePicture {
      background-color: #fffcff;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
  }
`;
