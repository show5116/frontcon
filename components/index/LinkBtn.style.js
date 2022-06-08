import styled from "styled-components";
import color from "../../styles/color";

export const Container = styled.div`
  cursor: pointer;
  width: 340px;
  height: 136px;
  padding-left: 20px;
  padding-top: 70px;
  &:nth-child(1),
  &:nth-child(4){
    background: ${color.blue};
  }
  &:nth-child(2),
  &:nth-child(3){
    background: ${color.charcoal};
  }
`;

export const LinkText = styled.a`
  color: ${color.white};
  font-size: 26px;
  font-weight: bolder;
`;
