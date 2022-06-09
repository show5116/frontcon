import styled from "styled-components";
import color from "../../styles/color";

export const Container = styled.div`
  display: flex;
  padding: 30px 40px 20px 40px;
  flex-direction: column;
  gap: 40px;
  width: 680px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.5);
  background: ${color.white};
`;

