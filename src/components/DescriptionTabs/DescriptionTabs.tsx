import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IResponseBook } from "types";
import { StyledTabs } from "./styles";

interface IProps {
  result: IResponseBook;
}

export const DescriptionTabs = ({ result }: IProps) => {
  const { desc, authors, subtitle } = result;
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
