import styled from "styled-components";
import color from "../../styles/color";

export const Container = styled.div`
  cursor: pointer;
  width: 340px;
  height: 136px;
  padding-left: 20px;
  padding-top: 70px;
  color: ${color.white};
  &:nth-child(1),
  &:nth-child(4){
    background: ${color.blue};
  }

  &:nth-child(1):hover,
  &:nth-child(4):hover{
    color: ${color.blue};
    outline: 1px solid ${color.blue};
    background: ${color.white};
  }
  
  &:nth-child(2),
  &:nth-child(3){
    background: ${color.charcoal};
  }

  &:nth-child(2):hover,
  &:nth-child(3):hover{
    color: ${color.charcoal};
    outline: 1px solid ${color.charcoal};
    background: ${color.white};
  }
`;

export const LinkText = styled.a`
  font-size: 26px;
  font-weight: bolder;
`;
