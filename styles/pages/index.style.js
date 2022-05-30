import styled from "styled-components";

export const Container = styled.div`
  max-width: 1420px;
  width: 100%;
  margin: 0 auto;

  .main {
    display: flex;
    flex-direction: column;
  }

  .main section {
    width: 100%;
    height: 335px;
  }

  .main section:nth-child(even) {
    background: #e0e0e0;
  }
`;
