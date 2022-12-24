import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import TagList from "./TagList";

function ProductOrService() {
  return (
    <Tabs isFitted width="100%" colorScheme="teal">
      <TabList mb="1em">
        <Tab>Products</Tab>
        <Tab>Services</Tab>
      </TabList>
      <TagList />
      {/* <TabPanels>
        <TabPanel>
          <TagList />
        </TabPanel>
        <TabPanel>
          <TagList />
        </TabPanel>
      </TabPanels> */}
    </Tabs>
  );
}

export default ProductOrService;
