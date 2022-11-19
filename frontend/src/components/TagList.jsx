import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function TagList() {
  return (
    <HStack spacing={5} overflowX="auto" width="100%" alignSelf="start">
      <Link to="">
        <Text fontSize="sm">Home</Text>
      </Link>
      <Link to="">
        <Text fontSize="sm">Shirts</Text>
      </Link>
      <Link to="">
        <Text fontSize="sm">Jeans</Text>
      </Link>
      <Link to="">
        <Text fontSize="sm">Home</Text>
      </Link>
      <Link to="">
        <Text fontSize="sm">Home</Text>
      </Link>
      <Link to="">
        <Text fontSize="sm">Home</Text>
      </Link>
    </HStack>
  );
}

export default TagList;
