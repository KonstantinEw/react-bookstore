import styled from "styled-components";
import { B1, Color } from "../../ui";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 35px 0px 35px 0px;
  border-top: 1px solid ${Color.Gray};
`;

export const StyledText = styled.p`
  ${B1}
  color: ${Color.Secondary}
`;
