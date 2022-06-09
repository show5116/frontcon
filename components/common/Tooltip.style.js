import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  .tooltip{
    display: none;
    position: absolute;
    z-index: 100;
  }
  ${(props) => props.isHover &&
      `&:hover{
        .tooltip{
          display: block;
        }
      }`
  }
`;
