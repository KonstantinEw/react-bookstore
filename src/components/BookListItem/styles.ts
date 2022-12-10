import styled from "styled-components";
import {
  B1,
  B2,
  Color,
  H3,
  Margin2,
  Margin3,
  Margin7,
  Margin8,
  randomColor,
} from "../../ui";

export const StyledBooksListItem = styled.figure`
  display: flex;
  flex-direction: column;
  height: 454px;
  margin-bottom: ${Margin2.desktop};
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${Margin7.desktop};
  background-color: ${() => randomColor()};
`;

export const Title = styled.a`
  margin-bottom: ${Margin8.desktop};
  ${H3};
  text-decoration: none;
`;

export const Subtitle = styled.p`
  margin-bottom: ${Margin3.desktop};
  ${B1};
  color: ${Color.Primary};
`;

export const RaitingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Cost = styled.span`
  ${B2}
`;
