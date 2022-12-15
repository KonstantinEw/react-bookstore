import styled from "styled-components";
import { B1, Color, H2, Margin6 } from "../../ui";

export const DescrList = styled.ul`
  padding: 40px 0px 64px 0px;
`;

export const CostRow = styled.li`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  ${H2}
`;

export const DescrItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${Margin6.desktop};
  ${B1};
  &:last-child {
    margin-bottom: 60px;
  }
`;

export const ListText = styled.span`
  ${B1};
  color: ${Color.Secondary};
`;

export const DescrText = styled.span`
  ${B1};
  color: ${Color.Primary};
`;
