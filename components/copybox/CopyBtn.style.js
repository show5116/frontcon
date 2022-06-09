import styled from "styled-components";
import color from "../../styles/color";

export const Container = styled.button`
  color: ${color.blue};
  width: 72px;
  height: 20px;
  border-radius: 6px;
  border: 1px solid ${color.fordGray};
  font-size: 16px;
  font-weight: bolder;
  background: ${color.white};
  &:hover{
    color: ${color.white};
    background: ${color.blue};
  }
`;
