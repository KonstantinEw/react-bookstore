import styled from "styled-components";
import { H1, Margin3, Media } from "../../ui";

export const StyledTitle = styled.h1`
  ${H1}
  margin-bottom:${Margin3.desktop};
  ${Media.SM} {
    font-size: 32px;
    margin-bottom: ${Margin3.mobile};
  }
`;
