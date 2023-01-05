import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import PageWrapper from "../components/PageWrapper";
import ProductItem from "../components/ProductItem";
import OrderItem from "../components/OrderItem";

function OrderPage() {
  const [isLessThanSM] = useMediaQuery("(max-width: 30em)");
  const [isLessThanMD] = useMediaQuery("(max-width: 48em)");

  return (
    <PageWrapper>
      <VStack w="100%" alignItems={"start"} spacing={6} mt={4}>
        <Heading as="h2" size="lg">
          Orders Received
        </Heading>
        <Divider orientation="horizontal" />
        <Grid
          gridTemplateColumns={isLessThanMD ? "1fr" : "repeat(10, 1fr)"}
          gap={10}
          w="100%"
        >
          <GridItem colSpan={isLessThanMD ? "1fr" : 4}>
            <Stack
              dir="column"
              spacing={4}
              w="100%"
              divider={<Divider orientation="horizontal" />}
            >
              <OrderItem />
              <OrderItem />
            </Stack>
          </GridItem>

          {!isLessThanMD && (
            <GridItem colSpan={6} flex="1">
              <Box bg={"yellow"}>hello</Box>
            </GridItem>
          )}
        </Grid>
      </VStack>
    </PageWrapper>
  );
}

export default OrderPage;
