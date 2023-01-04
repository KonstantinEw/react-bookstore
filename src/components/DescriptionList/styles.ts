import styled from "styled-components";
import { B1, Color, H2, Margin6, Media } from "ui";

const DescrList = styled.ul`
  padding: 40px 0px 0px 0px;
`;

const CostRow = styled.li`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  ${H2}
  ${Media.LG} {
    flex-direction: column;
  }
  ${Media.MD} {
    flex-direction: row;
  }
  ${Media.SM} {
    flex-direction: column;
  }
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
