import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  Text,
  useMediaQuery,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HiStar } from "react-icons/hi";
import productImg from "../assets/product-sample.png";

function ProductItem() {
  const toast = useToast();
  const [isLessThanSM] = useMediaQuery("(max-width: 30em)");
//   const [isLessThanMD] = useMediaQuery("(max-width: 48em)");
  const [quantity, setQuantity] = useState(1);

  const quantityErrorHandler = () => {
    toast({
      title: `Do not exceed the limit`,
      status: "error",
      isClosable: true,
    });
    setQuantity(1);
  };
  return (
    <Flex gap={4} alignItems={"start"} h="120px">
      <Box h="100%">
        <Image
          maxH="80%"
          minH="50%"
          src={productImg}
          borderRadius="2xl"
          objectFit={"cover"}
        />
      </Box>

      <VStack alignItems="start">
        <Heading as="h5" size={isLessThanSM ? "sm" : "md"}>
          Pixel Airbuds
        </Heading>
        {!isLessThanSM && (
          <Text fontSize={"sm"} color="#707070">
            4.5/5 <Icon as={HiStar}  />
          </Text>
        )}
        <Text fontSize={isLessThanSM ? "xs" : "sm"} color="#707070">
          Not Providing Delivery
        </Text>
      </VStack>
      <Spacer />
      <Flex flexDir="column" justifyContent="space-between" h="100%">
        <Heading as="h5" size={isLessThanSM ? "sm" : "md"}>
          $315
        </Heading>
        <Box width={isLessThanSM ? "60px" : "71px"}>
          <NumberInput
            size={isLessThanSM ? "xs" : "sm"}
            defaultValue={1}
            min={1}
            max={10}
            focusBorderColor="teal"
            value={quantity}
            onChange={(val) => setQuantity(val)}
            onInvalid={quantityErrorHandler}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
      </Flex>
    </Flex>
  );
}

export default ProductItem;
