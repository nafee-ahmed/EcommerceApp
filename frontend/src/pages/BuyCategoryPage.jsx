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
      {/* <HStack mt={5} spacing={8} bgColor="yellow">
        {!isLessThanSM && (
          <Box width="20%" alignSelf="start" >
            <SideBar />
          </Box>
        )}

        <VStack alignSelf="start" width="100%">
          {isLessThanSM ? (
            <Tabs isFitted variant="enclosed" width="100%">
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
            <HStack>
              <TagList />
            </HStack>
          )}
          <Box>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            quibusdam quam debitis veniam? Quia, natus voluptates rerum rem
            ipsum fuga aliquid laudantium deserunt accusamus, eos tempore et
            possimus dolore earum. Porro quae tempore velit recusandae eaque
            labore numquam similique dolore sit commodi. Alias nemo ratione
            laudantium quas vero eaque quibusdam enim, sequi explicabo ea ipsa
            in quis quam deserunt quae! Ab vel eaque ducimus sit quae voluptatum
            aliquam doloribus non dolorum voluptatem, recusandae a laudantium,
            in officiis deserunt, dicta alias molestiae earum neque magnam
            voluptatibus fugiat? Officia non quos reprehenderit. Voluptates
            maxime harum, praesentium odio autem magni soluta culpa cumque
            labore est quibusdam ratione provident nulla veritatis cum
            accusantium quisquam magnam? Labore natus libero soluta deleniti hic
            neque placeat. Animi! Amet asperiores blanditiis eveniet quia sequi
            eos suscipit unde numquam. Voluptatibus quia officia sapiente enim
            iusto consequuntur minus perspiciatis, molestiae architecto quaerat
            voluptatum est dolor porro velit nulla deleniti explicabo? Pariatur,
            dignissimos obcaecati. Dignissimos, magnam iure obcaecati aut
            maiores eos! Doloribus nulla iusto consequuntur deserunt et,
            expedita fugit laborum repellendus aperiam natus quisquam
            distinctio? Ea natus odit aliquid nesciunt laboriosam! Mollitia eum
            quo voluptatibus expedita temporibus corporis ut accusantium
            quisquam tempora praesentium quae tempore, aliquam modi rerum
            reprehenderit soluta placeat veniam, eius, nulla fugit nam
            aspernatur facere sapiente maiores. Dolorem? Quam aperiam alias cum
            autem dignissimos sit possimus, nobis debitis recusandae omnis
            deserunt ad dolorum beatae sed numquam eligendi tenetur. Repellendus
            quaerat cupiditate autem impedit dicta illo, possimus fugit
            doloremque. Vitae reprehenderit eligendi illum iure voluptatem
            optio. Deleniti, numquam nobis culpa autem ea aperiam incidunt
            accusantium architecto fugit iure eaque iste necessitatibus! Dolorem
            atque suscipit commodi magni soluta quis veritatis! Pariatur modi
            quasi quisquam sapiente aliquam corrupti doloribus dolorum odit
            cupiditate, earum eligendi eos iste optio, vero sunt doloremque
            atque unde. Maiores, cupiditate repudiandae. Veritatis dignissimos
            vero maxime laudantium minus? Beatae eaque veritatis assumenda
            corporis, provident id similique quod expedita recusandae nulla iure
            ratione, dolore asperiores laboriosam? Itaque veritatis, mollitia
            omnis beatae natus impedit consequatur magni sequi vel nemo
            sapiente. Harum pariatur officiis magni odit optio, quaerat
            explicabo facere amet dolore, animi cupiditate molestias. Unde
            voluptate praesentium ad error consequuntur saepe a tempora? Eius
            natus illo dolorum tempora mollitia omnis. Quod ea tempore porro
            officia eligendi perspiciatis hic nesciunt velit! Laborum totam eum
            nobis provident nostrum, iure esse perferendis ipsa assumenda.
            Dolore debitis ut amet enim. Quaerat tempore accusantium laboriosam.
            Nihil fugiat placeat obcaecati soluta fugit nostrum, maxime non unde
            quas modi at tempora blanditiis, veniam quis eveniet id labore
            consequatur reprehenderit vitae, atque officiis saepe! Quidem
            praesentium dignissimos tenetur! Consectetur saepe blanditiis, nobis
            similique, ea voluptatum repellendus omnis magni eum fugiat
            repudiandae doloribus aliquam tempore quis magnam reprehenderit?
            Quas ea esse quo sapiente natus laudantium dolorum eligendi numquam
            beatae. Maiores expedita nihil maxime perferendis veniam asperiores
            voluptate rerum recusandae? Maiores error vitae, possimus doloribus
            iusto ad illo fuga saepe eum in eaque quibusdam neque architecto,
            autem magnam aspernatur placeat. Assumenda placeat voluptates
            voluptatum officia soluta id consequatur adipisci dolores. Esse
            exercitationem enim nam eos, vel alias sapiente id veritatis
            blanditiis. Voluptatum, error totam animi nobis iure sed porro quia!
            Est sequi ab iste! Temporibus, expedita tenetur totam natus optio,
            nostrum atque libero tempore non ex, commodi accusantium inventore
            excepturi voluptas quidem voluptatibus consequuntur quas blanditiis
            consequatur distinctio aliquid suscipit. Architecto quos, excepturi
            maiores velit sit nobis minus reprehenderit vero eligendi iure, sunt
            porro. Explicabo odio nostrum delectus corporis? Eius porro
            doloremque assumenda commodi unde incidunt odio voluptatibus ut
            voluptate. Eaque voluptatem perspiciatis quas eligendi minima!
            Debitis accusantium odit dolore iste nemo molestiae earum libero
            nesciunt ea, officia laudantium eveniet id dolorum architecto
            consequatur! Ut eos optio maiores ex est.
          </Box>
        </VStack>
      </HStack> */}
    </PageWrapper>
  );
}

export default BuyCategoryPage;
