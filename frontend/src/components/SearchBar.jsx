import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  StackDivider,
  Tag,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Rating from "react-rating";
import productImg from "../assets/product-sample.png";
import { FaStar } from "react-icons/fa";

function SearchBar({ setIsShowSearch, withCancelButton, label = "small" }) {
  const [isLessThanSM] = useMediaQuery("(max-width: 30em)");
  const [isOpen, setIsOpen] = useState(false);
  const [searchRes, setSearchRes] = useState(["String", "as", "asbbs"]);
  const isSearchActive = useRef(false);
  const [searchQuery, setSearchQuery] = useState("");

  //delete this
  const [tags, setTags] = useState(["A", "vvv"]);

  const handleTextChange = (text) => {
    isSearchActive.current = true;
    setIsOpen(searchRes.length > 0 && isSearchActive.current);
    setSearchQuery(text);
  };

  return (
    <Popover isOpen={isOpen} autoFocus={false} w="100%">
      <PopoverTrigger>
        <VStack>
          <InputGroup w="100%">
            <Input
              ref={isSearchActive}
              type="text"
              placeholder="Search"
              focusBorderColor="#25ABB2"
              onChange={(e) => handleTextChange(e.target.value)}
            />

            {withCancelButton && label === "small" ? (
              <InputRightElement>
                <IconButton
                  size={"sm"}
                  colorScheme="teal"
                  aria-label="Search"
                  icon={<ImCross />}
                  onClick={() => setIsShowSearch(false)}
                />
              </InputRightElement>
            ) : isOpen ? (
              <InputRightElement>
                <IconButton
                  size={"sm"}
                  colorScheme="teal"
                  aria-label="Search"
                  icon={<ImCross />}
                  onClick={() => setIsOpen(false)}
                />
              </InputRightElement>
            ) : (
              <InputRightElement>
                <IconButton
                  size={"sm"}
                  colorScheme="teal"
                  aria-label="Search"
                  icon={<FaSearch />}
                />
              </InputRightElement>
            )}
          </InputGroup>
        </VStack>
      </PopoverTrigger>
      <PopoverContent w={isLessThanSM ? "90vw" : "50vw"}>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          align="stretch"
        >
          {searchRes?.map((item) => (
            <HStack key={item} m={2} align="start">
              {!isLessThanSM && (
                <Image
                  boxSize={"60px"}
                  src={productImg}
                  borderRadius="2xl"
                  objectFit={"cover"}
                />
              )}
              <VStack alignItems={"start"}>
                <Heading as="h5" size={isLessThanSM ? "sm" : "md"}>
                  Apple Airpods
                </Heading>
                <Text fontSize="xs" color="#773903">
                  {tags?.map((tag) => (
                    <Tag
                      key={tag}
                      size="sm"
                      variant="solid"
                      colorScheme="teal"
                      mr={2}
                    >
                      {tag}
                    </Tag>
                  ))}
                </Text>
              </VStack>
              <Spacer />
              <Rating
                initialRating={4}
                readonly={true}
                emptySymbol={<FaStar color="#bbb" />}
                fullSymbol={<FaStar color="#ffc107" />}
                emptyColor="#bbb"
                fullColor="#ffc107"
              />
            </HStack>
            // <Box px={3} key={item}>
            //   <Text cursor={"pointer"}>label</Text>
            // </Box>
          ))}{" "}
        </VStack>
      </PopoverContent>
    </Popover>
  );
}

export default SearchBar;
