import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMediaQuery,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import PageWrapper from "../components/PageWrapper";
import SideBar from "../components/SideBar";
import TagList from "../components/TagList";
import productSample from "../assets/product-sample.png";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useState } from "react";

function BuyCategoryPage() {
  const toast = useToast();
  const [isLessThanSM] = useMediaQuery("(max-width: 30em)");
  const [isLessThanMD] = useMediaQuery("(max-width: 48em)");

  const [isLiked, setIsLiked] = useState(false);
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
    <PageWrapper>
      <Grid
        gridTemplateColumns="repeat(10, 1fr)"
        columnGap={isLessThanMD ? 2 : 4}
        mt={5}
      >
        {!isLessThanSM && (
          <GridItem colSpan={2}>
            <SideBar />
          </GridItem>
        )}
        <GridItem colSpan={isLessThanSM ? 10 : 8}>
          <VStack alignSelf="start" width="100%">
            {isLessThanSM ? (
              <Tabs isFitted width="100%">
                <TabList mb="1em">
                  <Tab>Products</Tab>
                  <Tab>Services</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <TagList />
                  </TabPanel>
                  <TabPanel>
                    <TagList />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            ) : (
              <Box width="100%">
                <TagList />
              </Box>
            )}

            <Grid
              templateColumns="repeat(10, 1fr)"
              columnGap={isLessThanMD ? 0 : 7}
              rowGap={isLessThanMD ? 7 : 0}
            >
              <GridItem colSpan={isLessThanMD ? 10 : 5}>
                <Image src={productSample} borderRadius="2xl" />
              </GridItem>
              <GridItem colSpan={isLessThanMD ? 10 : 5}>
                <Card variant="filled" bgColor="#F8F8F8" borderRadius="2xl">
                  <CardHeader>
                    <Text fontSize="lg" color="#773903">
                      Electronics
                    </Text>
                    <Heading size="lg"> Pixel Airbuds</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Similique, dolore. Quia culpa adipisci odio, aperiam eos
                      fuga fugit velit totam consectetur, ab, veritatis nostrum
                      deleniti? Molestias, quis. Pariatur, magni reiciendis.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <HStack justifyContent="space-between" width="100%">
                      <Text fontSize="3xl" fontWeight="bold" color="#FF5D15">
                        $215
                      </Text>
                      <Text
                        fontSize={isLessThanSM ? "md" : "lg"}
                        fontWeight="bold"
                        color="black"
                      >
                        4/5 Rating
                      </Text>
                    </HStack>
                  </CardFooter>
                </Card>

                <NumberInput
                  defaultValue={1}
                  min={1}
                  max={10}
                  mt={6}
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

                <Stack
                  direction="row"
                  width="100%"
                  my={6}
                  justifyContent={"end"}
                >
                  <Button colorScheme="teal" borderRadius="3xl" px={5}>
                    Add to Cart
                  </Button>
                  <IconButton
                    onClick={() => setIsLiked(!isLiked)}
                    disabled={isLiked}
                    icon={isLiked ? <BsSuitHeartFill /> : <BsSuitHeart />}
                    variant="ghost"
                    colorScheme="red"
                  />
                </Stack>
              </GridItem>
            </Grid>
          </VStack>
        </GridItem>
      </Grid>
    </PageWrapper>
  );
}

export default BuyCategoryPage;
