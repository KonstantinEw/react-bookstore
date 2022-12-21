import { Link } from "react-router-dom";
import styled from "styled-components";
import { B1, B2, Color, H3, Margin3, Margin7, Margin8, randomColor } from "ui";

const StyledBooksListItem = styled.figure`
  display: grid;
  grid-template-rows: auto 0.5fr 0.5fr auto;
  justify-items: auto;
  height: 550px;
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${Margin7.desktop};
  background-color: ${() => randomColor()};
`;

const Title = styled(Link)`
  ${H3};
  text-decoration: none;
`;

const Subtitle = styled.p`
  min-height: 35px;
  ${B1};
  color: ${Color.Primary};
`;

const DescrWrapper = styled.div`
  padding: 10px;
`;

const Cost = styled.span`
  ${B2};
  color: ${Color.Primary};
`;

export { DescrWrapper, Cost, Subtitle, Title, ImageWrap, StyledBooksListItem };
