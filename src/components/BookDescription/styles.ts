import styled from "styled-components";
import { Margin1, randomColor } from "../../ui";

export const ImageWrap = styled.div`
  width: 50%;
  height: 472px;
  background: ${() => randomColor()};
`;

export const DescrWrap = styled.div`
  width: 50%;
`;

export const BookDetails = styled.div`
  display: flex;
  gap: 128px;
  margin-bottom: ${Margin1.desktop};
`;
