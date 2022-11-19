import {
  Flex,
  HStack,
  Icon,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function SideBar() {
  const [isLessThanMD] = useMediaQuery("(max-width: 48em)");

  return (
    <VStack width="100%" bgColor="#F8F8F8" borderBottomRadius="xl">
      <Flex
        bgColor="#25ACB2"
        borderTopRadius="xl"
        width="100%"
        justifyContent="center"
        px={4}
        py={2}
      >
        <Text fontSize={isLessThanMD ? "md" : "xl"} color="white">
          Categories
        </Text>
      </Flex>

      <Link to="" style={{ width: "100%" }}>
        <HStack justifyContent="space-between" width="100%" px={4} py={2}>
          <Text>Products</Text>
          {!isLessThanMD && <Icon as={BsArrowRight} />}
        </HStack>
      </Link>

      <Link to="" style={{ width: "100%" }}>
        <HStack justifyContent="space-between" width="100%" px={4} py={2}>
          <Text>Services</Text>
          {!isLessThanMD && <Icon as={BsArrowRight} />}
        </HStack>
      </Link>
    </VStack>
  );
}

export default SideBar;
