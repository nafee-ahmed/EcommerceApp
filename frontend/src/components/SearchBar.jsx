import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function SearchBar({ setIsShowSearch, withCancelButton }) {
  return (
    <VStack>
      <InputGroup w="100%">
        {withCancelButton && (
          <InputLeftElement>
            <IconButton
              size={"sm"}
              colorScheme="teal"
              aria-label="Search"
              icon={<ImCross />}
              onClick={() => setIsShowSearch(false)}
            />
          </InputLeftElement>
        )}
        <Input type="text" placeholder="Search" focusBorderColor="#25ABB2" />
        <InputRightElement>
          <IconButton
            size={"sm"}
            colorScheme="teal"
            aria-label="Search"
            icon={<FaSearch />}
          />
        </InputRightElement>
      </InputGroup>
    </VStack>
  );
}

export default SearchBar;
