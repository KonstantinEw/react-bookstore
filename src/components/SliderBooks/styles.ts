import styled from "styled-components";
import { Color, H2, Margin2, Media } from "ui";

const Title = styled.h3`
  margin-bottom: ${Margin2.desktop};
  ${H2};
  color: ${Color.Primary};
  ${Media.MD} {
    margin-bottom: ${Margin2.mobile};
  }
`;

const SliderWrapper = styled.div`
  margin-bottom: ${Margin2.desktop};
  ${Media.MD} {
    margin-bottom: ${Margin2.mobile};
  } ;
`;

export { SliderWrapper, Title };
