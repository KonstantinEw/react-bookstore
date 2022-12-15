import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const DescriptionTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Description</Tab>
        <Tab>Authors</Tab>
        <Tab>Reviews</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
};
