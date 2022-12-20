import styled from "styled-components";
import { Margin1, randomColor } from "../../ui";

const ImageWrap = styled.div`
  width: 50%;
  height: 472px;
  background: ${() => randomColor()};
`;

const DescrWrap = styled.div`
  width: 50%;
`;

const BookDetails = styled.div`
  display: flex;
  gap: 128px;
  margin-bottom: ${Margin1.desktop};
`;

export { BookDetails, DescrWrap, ImageWrap };
