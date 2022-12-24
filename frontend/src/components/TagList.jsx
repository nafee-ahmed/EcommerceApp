import {
  Box,
  HStack,
  Skeleton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../contexts/CategoryContext";
import { ax } from "../utils/constants.js";

function TagList(isEnabled = true) {
  const { categoryDispatch, currentType, currentIndex } =
    useContext(CategoryContext);
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(false);

  const viewTabs = async () => {
    setLoading(true);
    try {
      const res = await ax.get(
        `/tag/?categoryType=${currentType.toLowerCase()}`
      );
      setTabs(res.data);
    } catch (err) {
      console.log(err.response?.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    viewTabs();
  }, [currentType]);

  return (
    <HStack overflowX="auto" width="100%" alignSelf="start">
      <Tabs variant="soft-rounded" colorScheme="teal">
        <Box overflowX={"auto"} width="100%">
          {loading ? (
            <Skeleton w={"60vw"}>
              <div>x</div>
            </Skeleton>
          ) : (
            <TabList minWidth="200px">
              <Tab
                textOverflow={"hidden"}
                isDisabled={!isEnabled}
                onClick={() =>
                  categoryDispatch({
                    type: "SET_CURRENT_TAB",
                    payload: { tag: undefined, index: 0 },
                  })
                }
              >
                Home
              </Tab>
              {tabs.map((tab, index) => (
                <Tab
                  textOverflow={"hidden"}
                  isDisabled={!isEnabled}
                  key={tab._id}
                  onClick={() =>
                    categoryDispatch({
                      type: "SET_CURRENT_TAB",
                      payload: { tag: tab.tag, index: index + 1 },
                    })
                  }
                >
                  {tab.tag}
                </Tab>
              ))}
            </TabList>
          )}
        </Box>
      </Tabs>
    </HStack>
  );
}

export default TagList;
