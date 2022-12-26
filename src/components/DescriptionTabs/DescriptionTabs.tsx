import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IDetailsBook } from "types";
import { StyledTabs } from "./styles";

interface IProps {
  book: IDetailsBook;
}

export const DescriptionTabs = ({ book }: IProps) => {
  const { desc, authors, subtitle } = book;
  return (
    <StyledTabs>
      <TabList>
        <Tab>Description</Tab>
        <Tab>Authors</Tab>
        <Tab>Reviews</Tab>
      </TabList>

      <TabPanel>
        <p>{desc}</p>
      </TabPanel>
      <TabPanel>
        <p>{authors}</p>
      </TabPanel>
      <TabPanel>
        <p>{subtitle}</p>
      </TabPanel>
    </StyledTabs>
  );
};
