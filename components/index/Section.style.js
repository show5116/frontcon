import styled from "styled-components";
import color from "../../styles/color";

export const Container = styled.section`
  width: 100%;
  height: 335px;
  padding-top: 50px;
  padding-bottom: 50px;
  &:nth-child(even) {
    text-align: left;
    background: ${color.white};
    padding-left: 120px;
  }
  &:nth-child(odd) {
    text-align: right;
    background: ${color.lightGray};
    padding-right: 120px;
  }
`;

export const Title = styled.div`
  color: ${color.gray};
  font-size: 36px;
  font-weight: bolder;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  color: ${color.charcoal};
  font-size: 40px;
  font-weight: bolder;
  line-height: 3rem;
  margin-bottom: 20px;
`;

export const Link = styled.a`
  font-weight: bold;
  cursor: pointer;
  padding: 12px 28px;
  background: ${color.blue};
  color: ${color.white};
  font-size: 26px;
  &:hover{
    color: ${color.blue};
    outline: 1px solid ${color.blue};
    background: ${color.white};
  }
`;
