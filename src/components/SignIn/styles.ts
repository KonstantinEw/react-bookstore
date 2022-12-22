import { Link } from "react-router-dom";
import styled from "styled-components";
import { B1, Color, H3, Media } from "ui";

const BodyForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 32px 32px 32px;
`;

const CustomLink = styled(Link)`
  margin-bottom: 40px;
  ${B1};
  color: ${Color.Primary};
  text-decoration: none;
`;

export { CustomLink, BodyForm };
