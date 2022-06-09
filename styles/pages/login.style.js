import styled from "styled-components";
import color from "../color";

export const Container = styled.div`
  height: calc( 100vh - 470px );
`;

export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px auto 0 auto;
  width: 700px;
  height: 270px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.5);
  background: ${color.white};
`;

export const GitLoginText = styled.span`
  display: inline-block;
  color: ${color.blue};
  font-size: 46px;
  font-weight: bolder;
  margin-top: 30px;
`;

export const GitLoginBtn = styled.button`
  display: inline-block;
  width: 300px;
  margin-top: 50px;
  background: ${color.white};
  border : 1px solid ${color.charcoal};
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  svg {
    margin-left: 10px;
  }
  &:hover{
    background: ${color.black};
    color: ${color.white};
    svg {
      path{
        fill: ${color.white};
      }
    }
  }
`;
