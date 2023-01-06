import { Tabs, Tab, TabList } from "react-tabs";
import styled from "styled-components";
import { B1, Color, Margin1 } from "ui";

const StyledTabs = styled(Tabs)`
  min-height: 200px;
  margin-bottom: ${Margin1.desktop};
`;

const StyledTabList = styled(TabList)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  border-bottom: 1px solid ${Color.Secondary};
`;

const StyledTab = styled(Tab)`
  padding: 0px 40px 24px 40px;
  background: ${Color.Primary_Light};
  border: none;
  border-bottom: 3px solid transparent;
  ${B1}
  color: ${Color.Primary};
  transition: all 0.2s ease-in-out;
  outline: none;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid ${Color.Primary};
  }
`;

const Text = styled.p`
  ${B1}
  color: ${Color.Primary};
`;

export { StyledTabs, StyledTab, StyledTabList, Text };
