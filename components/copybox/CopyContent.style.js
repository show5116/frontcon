import styled from "styled-components";
import color from "../../styles/color";

export const Container = styled.div`
  
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
  h4 {
    font-size: 36px;
    font-weight: bolder;
  }
`;

export const ContentText = styled.textarea`
  width: 100%;
  height: 220px;
  resize: none;
  border: 1px solid ${color.fordGray};
  border-radius: 8px;
  padding: 20px 0 0 20px;
  font-size: 26px;
  font-weight: bolder;
`;
