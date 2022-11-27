import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import LandingImg from "../assets/landing-img.png";
import PageWrapper from "../components/PageWrapper";
import ProductOrService from "../components/ProductOrService";
import SideBar from "../components/SideBar";
import TagList from "../components/TagList";
import ForYou from "../assets/for-you.png";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";

function HomePage() {
  const [isLessThanSM] = useMediaQuery("(max-width: 30em)");
  const [isLessThanMD] = useMediaQuery("(max-width: 48em)");

  return (
    <PageWrapper>
      <VStack>
        {/* Top Section with landing image and sidebar */}
        <Grid
          gridTemplateColumns="repeat(10, 1fr)"
          columnGap={isLessThanMD ? 2 : 4}
          my={4}
        >
          {!isLessThanSM && (
            <GridItem colSpan={2}>
              <SideBar style={{ float: "left" }} />
            </GridItem>
          )}
          <GridItem colSpan={isLessThanSM ? 10 : 8}>
            <VStack alignItems="start">
              {isLessThanSM ? <ProductOrService /> : <TagList />}

              {!isLessThanSM && (
                <Box>
                  <Image src={LandingImg} objectFit="cover" borderRadius="lg" />
                </Box>
              )}
            </VStack>
          </GridItem>
        </Grid>

        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={4} width="100%">
          {!isLessThanMD && <Image src={ForYou} />}
          <Link to="/buy/Product">
            <CategoryCard />
          </Link>
          <Link to="/buy/Product">
            <CategoryCard />
          </Link>{" "}
          <Link to="/buy/Product">
            <CategoryCard />
          </Link>{" "}
          <Link to="/buy/Product">
            <CategoryCard />
          </Link>
        </SimpleGrid>
      </VStack>
    </PageWrapper>
    // <Flex justifyContent="space-between" flexDir="column" height="100vh">
    //   <Box pr={4} pl={4}>
    //     <TopNavbar />
    //     <Box height="100vh" bgColor="red" />
    //   </Box>
    //   <Footer />
    // </Flex>
  );
}

export default HomePage;
