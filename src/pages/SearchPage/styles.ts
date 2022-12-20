import styled from "styled-components";
import { Margin1, Color } from "ui";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 0px 24px 0px;
  margin-bottom: ${Margin1.desktop};
  border-bottom: 1px solid ${Color.Gray};
`;
