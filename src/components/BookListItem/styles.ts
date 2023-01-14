import { Link } from "react-router-dom";
import styled from "styled-components";
import { B1, B2, Color, H3, Margin7, randomColor } from "ui";

const StyledBooksListItem = styled(Link)`
  display: grid;
  grid-template-rows: 3fr 0.5fr 0.5fr 0.5fr;
  gap: 10px;
  height: 550px;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 1px 5px 20px ${Color.Gray};
  }
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  margin-bottom: ${Margin7.desktop};
  background-color: ${() => randomColor()};
`;

const Title = styled.h3`
  ${H3};
`;

const Subtitle = styled.p`
  min-height: 35px;
  ${B1};
  color: ${Color.Secondary};
`;

const DescrWrapper = styled.div`
  padding: 10px;
`;

const Cost = styled.span`
  ${B2};
  color: ${Color.Primary};
`;

export { DescrWrapper, Cost, Subtitle, Title, ImageWrap, StyledBooksListItem };
