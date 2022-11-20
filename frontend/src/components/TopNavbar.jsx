import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { TiHome } from "react-icons/ti";
import {GoListUnordered} from 'react-icons/go'
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function TopNavbar() {
  const [isLessThanSM] = useMediaQuery("(max-width: 30em)");
  const [isShowSearch, setIsShowSearch] = useState(false);
  const sidePadding = 4;

  return isShowSearch ? (
    <Flex
      mt={4}
      width="100%"
      justifyContent="center"
      flexDir="row"
      pr={sidePadding}
      pl={sidePadding}
    >
      <SearchBar setIsShowSearch={setIsShowSearch} withCancelButton={true} />
    </Flex>
  ) : (
    <Flex
      justifyContent="space-between"
      flexDir="row"
      mt={4}
      pr={sidePadding}
      pl={sidePadding}
    >
      {/* if less than SM, show home icon otherwise logo */}
      {!isShowSearch && (
        <>
          {isLessThanSM ? (
            <Link to="/">
              <IconButton
                size={isLessThanSM ? "sm" : "md"}
                colorScheme="teal"
                aria-label="Home"
                isRound={true}
                icon={<TiHome size="80%" />}
              />
            </Link>
          ) : (
            <Link to="/">
              <Flex flexDir="column" justifyContent="center">
                <Image src={logo} w={"130px"} />
              </Flex>
            </Link>
          )}
        </>
      )}

      {!isLessThanSM && (
        <Box w="30%">
          <SearchBar setIsShowSearch={true} withCancelButton={false} />
        </Box>
      )}

      <HStack spacing={2}>
        {isLessThanSM && (
          <IconButton
            size={"sm"}
            colorScheme="teal"
            aria-label="Search"
            icon={<FaSearch />}
            isRound={true}
            onClick={() => setIsShowSearch(!isShowSearch)}
          />
        )}
        <Link to="/add/category">
          <IconButton
            size={isLessThanSM ? "sm" : "md"}
            colorScheme="teal"
            aria-label="Add Product"
            isRound={true}
            icon={<IoMdAdd size="80%" />}
          />
        </Link>
        <Link to="/cart">
          <IconButton
            size={isLessThanSM ? "sm" : "md"}
            colorScheme="teal"
            aria-label="Cart"
            isRound={true}
            variant="ghost"
            icon={<HiShoppingCart size="80%" />}
          />
        </Link>
        <IconButton
          size={isLessThanSM ? "sm" : "md"}
          colorScheme="teal"
          aria-label="Profile"
          isRound={true}
          icon={<GoListUnordered size="70%" />}
        />
      </HStack>
    </Flex>
  );
}

export default TopNavbar;
