import styled from "styled-components";
import color from "../../styles/color";

export const Container = styled.header`
  height:
          ${({headState})=> headState === "default" && "88px"}
          ${({headState})=> headState === "main" && "540px"}
          ${({headState})=> headState === "guide" && "360px"}
          ${({headState})=> headState === "login" && "360px"};
  width: 100%;
  background: linear-gradient(${color.lightGray},${color.whiteSmoke});

  .header-nav{
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
  }
  
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
    }
  }
`;

export const Menu = styled.a`
  cursor: pointer;
  color : ${color.gray};
  &:hover{
    color: ${color.white};
  }
`;

export const LoginBtn = styled.a`
  cursor: pointer;
  padding : 3px 6px;
  color: ${color.white};
  background-color: ${color.blue};
  &:hover{
    color: ${color.blue};
    outline: 1px solid ${color.blue};
    background: ${color.white};
  }
`;

export const HeaderContent = styled.div`
  padding: 50px 120px;
  font-size: 46px;
  font-weight: bolder;
  color: ${color.blue};
`;
