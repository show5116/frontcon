import styled from "styled-components";
import color from "../color";

export const Container = styled.div`
  margin-top: 20px;
`;

export const ExplainSection = styled.div`
  display: flex;
`;

export const ExplainMain = styled.div`
  flex: 1 1 0;
  padding-left: 120px;
`;

export const CtrlCV = styled.div`
  color: ${color.charcoal};
  font-size: 46px;
  font-weight: bolder;
  margin-bottom: 20px;
`;

export const Explanation = styled.div`
  color: ${color.gray};
  font-size: 20px;
  font-weight: bold;
`;

export const BtnContainer = styled.div`
  flex: 1 1 0;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
