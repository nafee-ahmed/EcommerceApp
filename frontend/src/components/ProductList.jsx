import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

import ProductItem from "./ProductItem";

function ProductList({ label, width }) {
  return (
    <Card variant="unstyled" width={width || "100%"}>
      <CardHeader>
        <Heading size="lg">
          {label === "cart" ? "Cart" : "Items bought"}
        </Heading>
        <Divider orientation="horizontal" my={4} />
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4" w="100%">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Stack>
      </CardBody>
    </Card>
  );
}

export default ProductList;
