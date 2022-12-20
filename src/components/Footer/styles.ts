import styled from "styled-components";
import { B1, Color, Media } from "ui";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 35px 0px 35px 0px;
  border-top: 1px solid ${Color.Gray};
  ${Media.SM} {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const Text = styled.p`
  ${B1}
  color: ${Color.Secondary}
`;

export { Text, StyledFooter };
