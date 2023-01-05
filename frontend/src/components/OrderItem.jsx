import {
  Box,
  Divider,
  Flex,
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
import { BsCircleFill } from "react-icons/bs";
import { TbTruck } from "react-icons/tb";
import productImg from "../assets/product-sample.png";

function OrderItem() {
  const [isLessThanSM] = useMediaQuery("(max-width: 30em)");
  const [isLessThanMD] = useMediaQuery("(max-width: 55em)");

  return (
    <Flex
      gap={4}
      alignItems={"start"}
      h="120px"
      cursor={"pointer"}
      _hover={{ bg: "teal.100", borderRadius: "xl" }}
      p={isLessThanSM ? 0 : 4}
    >
      <Box h="100%">
        <Image
          maxH="100%"
          minH="40%"
          src={productImg}
          borderRadius="2xl"
          objectFit={"cover"}
        />
      </Box>
      <VStack alignItems={"start"} spacing={1}>
        <Heading as="h5" size={isLessThanSM ? "sm" : "md"}>
          Apple AirPods
        </Heading>
        <HStack>
          <BsCircleFill size="10px" color="#37a169" />
          <Text fontSize="sm" color={"gray.500"}>
            Paid
          </Text>
        </HStack>
        <HStack>
          <TbTruck size="15px" color="#37a169" />
          <Text fontSize="sm" color={"gray.500"}>
            Providing Delivery
          </Text>
        </HStack>
      </VStack>
      <Spacer />
      <Stack
        direction={isLessThanMD ? "column" : "row"}
        align="center"
        h="80%"
        spacing={5}
      >
        <Heading as="h5" size={isLessThanSM ? "sm" : "md"}>
          1x
        </Heading>
        <Heading as="h5" size={isLessThanSM ? "sm" : "md"} color="#f0752f">
          $215
        </Heading>
      </Stack>
    </Flex>
  );
}

export default OrderItem;
