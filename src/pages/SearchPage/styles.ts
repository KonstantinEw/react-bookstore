import styled from "styled-components";
import { Margin1, Color, Margin3, Media, H1 } from "ui";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 0px 24px 0px;
  margin-bottom: ${Margin1.desktop};
  border-bottom: 1px solid ${Color.Gray};
`;

const Title = styled.h1`
  margin-bottom: ${Margin3.desktop};
  ${H1}
  text-transform: uppercase;
  ${Media.SM} {
    margin-bottom: ${Margin3.mobile};
    font-size: 32px;
  }
`;

export { Title, StyledHeader };
