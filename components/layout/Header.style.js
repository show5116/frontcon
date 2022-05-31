import styled from "styled-components";
import color from "../../styles/color";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  height: 88px;
  width: 100%;
  background: linear-gradient(${color.lightGray},${color.whiteSmoke});
  
  h1{
    font-size: 38px;
    padding: 20px 0px 23px 0px;
    cursor: pointer;
    font-weight: bolder;
    color: ${color.blue};
  }
  
  nav {
    padding: 24px 90px 26px 0px;
    font-size: 32px;
    font-weight: bolder;
    ul {
      display: flex;
      gap: 40px;
      li a {
        cursor: pointer;
      }
      li a.login-btn{
        padding : 3px 6px;
        color: ${color.white};
        background-color: ${color.blue};
      }
    }
  }
`;
