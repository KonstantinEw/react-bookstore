import styled from "styled-components";
import { B1, Color, H2, Margin6 } from "../../ui";

const DescrList = styled.ul`
  padding: 40px 0px 64px 0px;
`;

const CostRow = styled.li`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  ${H2}
`;

const DescrItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${Margin6.desktop};
  ${B1};
  &:last-child {
    margin-bottom: 60px;
  }
`;

const ListText = styled.span`
  ${B1};
  color: ${Color.Secondary};
`;

const DescrText = styled.span`
  ${B1};
  color: ${Color.Primary};
`;

export { DescrList, DescrText, ListText, DescrItem, CostRow };
