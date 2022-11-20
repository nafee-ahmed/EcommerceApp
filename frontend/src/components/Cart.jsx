import {
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";

import ProductList from "./ProductList";

function Cart() {
//   const [isLessThanSM] = useMediaQuery("(max-width: 30em)");
  const [isLessThanMD] = useMediaQuery("(max-width: 48em)");

  return (
    <Grid gridTemplateColumns="repeat(10, 1fr)">
      <GridItem colSpan={isLessThanMD ? 10 : 5}>
        <ProductList label="cart" />
      </GridItem>

      <GridItem colSpan={4}>Payment form...</GridItem>
    </Grid>
  );
}

export default Cart;
