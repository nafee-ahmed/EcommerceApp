import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Cart from "../components/Cart";
import PageWrapper from "../components/PageWrapper";
import ProductList from "../components/ProductList";
import { CartContext } from "../contexts/CartContext";

function BuyingPage() {
  const [isLessThanSM] = useMediaQuery("(max-width: 30em)");
  // const [isLessThanMD] = useMediaQuery("(max-width: 48em)");
  const { cart, cartDispatch } = useContext(CartContext);
  
  return (
    <PageWrapper>
      {/* {isLessThanMD && <Box>MD</Box>}
      {isLessThanSM && <Box>SM</Box>} */}
      <VStack width="100%" spacing={5} my={5}>
        <Tabs
          variant="soft-rounded"
          colorScheme="teal"
          width="100%"
          align="center"
        >
          <TabList>
            <Tab>Cart</Tab>
            <Tab>Bought</Tab>
          </TabList>
          <TabPanels align="start">
            <TabPanel>
              <Cart products={cart} />
            </TabPanel>
            <TabPanel>
              <Flex justifyContent="center">
                <ProductList
                  label="bought"
                  width={isLessThanSM ? "100%" : "70%"}
                />
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </PageWrapper>
  );
}

export default BuyingPage;
