import styled from "styled-components";
import { Margin1, Media } from "ui";

export const StyledOrderPage = styled.section`
  margin-bottom: ${Margin1.desktop};
  ${Media.SM} {
    margin-bottom: ${Margin1.mobile};
  }
`;
