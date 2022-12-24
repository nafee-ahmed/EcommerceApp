import {
  Flex,
  HStack,
  Icon,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { tealColor } from "../utils/constants";
import { useEffect } from "react";
import { CategoryContext } from "../contexts/CategoryContext";

function SideBar() {
  const [isLessThanMD] = useMediaQuery("(max-width: 48em)");
  const [selected, setSelected] = useState("Products");
  const items = ["Products", "Services"];
  const { categoryDispatch } = useContext(CategoryContext);

  useEffect(() => {
    categoryDispatch({
      type: "INITIAL_OPTIONS",
      payload: selected.toString().slice(0, -1).toLowerCase(),
    });
  }, [selected]);

  return (
    <VStack width="100%" bgColor="#F8F8F8" borderBottomRadius="xl">
      <Flex
        bgColor={tealColor}
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

      {/* <Link to="" style={{ width: "100%" }}> */}
      {items.map((item) => (
        <HStack
          key={item}
          justifyContent="space-between"
          width="100%"
          px={4}
          py={2}
          cursor="pointer"
          onClick={() => setSelected(item)}
          bg={selected === item && tealColor}
          color={selected === item && "white"}
          borderRadius={selected && "md"}
        >
          <Text>{item}</Text>
          {!isLessThanMD && <Icon as={BsArrowRight} />}
        </HStack>
      ))}
    </VStack>
  );
}

export default SideBar;
