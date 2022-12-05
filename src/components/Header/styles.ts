import styled from "styled-components";
import { Color, Margin1, Media } from "../../ui";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 0px 24px 0px;
  margin-bottom: ${Margin1.desktop};
  border-bottom: 1px solid ${Color.Gray};
`;

export const LogoWrapper = styled.div`
  padding: 14px 0px 14px 0px;
`;
