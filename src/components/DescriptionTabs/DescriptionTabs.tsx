import { TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IDetailsBook } from "types";
import { StyledTab, StyledTabList, StyledTabs, Text } from "./styles";

interface IProps {
  book: IDetailsBook;
}

export const DescriptionTabs = ({ book }: IProps) => {
  const { desc, authors, subtitle } = book;
  return (
    <StyledTabs>
      <StyledTabList>
        <StyledTab>Description</StyledTab>
        <StyledTab>Authors</StyledTab>
        <StyledTab>Reviews</StyledTab>
      </StyledTabList>

      <TabPanel>
        <Text>{desc}</Text>
      </TabPanel>
      <TabPanel>
        <Text>{authors}</Text>
      </TabPanel>
      <TabPanel>
        <Text>{subtitle}</Text>
      </TabPanel>
    </StyledTabs>
  );
};
