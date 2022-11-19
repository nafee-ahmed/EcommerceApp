import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import PageWrapper from "../components/PageWrapper";
import uploadImg from "../assets/uploading-img.png";
import FieldInput from "../components/FieldInput";
import { Field, Formik } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";

function AddCategoryPage() {
  const [isLessThanMD] = useMediaQuery("(max-width: 48em)");

  const { cat } = useParams();

  return (
    <PageWrapper>
      <VStack justifyContent="center" spacing={4} mt={8} mb={8}>
        <Heading size="lg" as="h4">
          Start Selling
        </Heading>
        <Heading size="md" as="h4">
          Type: {cat}
        </Heading>
      </VStack>
      <Formik
        initialValues={{
          productName: "",
          isDelivery: "",
          price: "",
          location: "",
          condition: "",
          warranty: "",
          description: "",
        }}
        validationSchema={Yup.object({
          productName: Yup.string().required("Product name required"),
          isDelivery: Yup.string().required("Delivery option required"),
          price: Yup.number().required("Price required"),
          location: Yup.string().required("Location required"),
          condition: Yup.string().required("Condition required"),
          warranty: Yup.string().required("Warranty required"),
          description: Yup.string().required("Description required"),
        })}
        onSubmit={(values, actions) => {
          console.log("first");

          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <Stack direction="row" w="100%" alignItems="start" mb={4}>
            {!isLessThanMD && (
              <VStack align="stretch">
                <Image src={uploadImg} boxSize="70%" />
                <Input type="file" size="sm" width="70%" />
              </VStack>
            )}

            <Box w="100%" h="70%">
              <Grid
                w="100%"
                h="100%"
                templateRows="repeat(5, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={5}
              >
                <GridItem rowSpan={1} colSpan={isLessThanMD ? 2 : 1}>
                  <FieldInput
                    placeholder="Product Name"
                    focusBorderColor="#25ABB2"
                    name="productName"
                  />
                </GridItem>

                <GridItem
                  rowSpan={1}
                  colSpan={isLessThanMD ? 2 : 1}
                  justifySelf={isLessThanMD ? "center" : "start"}
                >
                  <FormControl
                    isInvalid={
                      formik.errors.isDelivery && formik.touched.isDelivery
                    }
                  >
                    <HStack spacing="10px" alignItems="start">
                      <Text fontSize="sm" as="span">
                        Provide delivery options?
                      </Text>

                      <Text as="label" fontSize="sm">
                        <Field type="radio" name="isDelivery" value="yes" />
                        Yes
                      </Text>

                      <Text as="label" fontSize="sm">
                        <Field type="radio" name="isDelivery" value="no" />
                        No
                      </Text>
                      <FormErrorMessage>
                        {formik.errors.isDelivery}
                      </FormErrorMessage>
                    </HStack>
                  </FormControl>
                </GridItem>

                <GridItem rowSpan={1} colSpan={isLessThanMD ? 2 : 1}>
                  <FieldInput
                    type="number"
                    placeholder="Price"
                    focusBorderColor="#25ABB2"
                    name="price"
                  />
                </GridItem>

                <GridItem rowSpan={1} colSpan={isLessThanMD ? 2 : 1}>
                  <FieldInput
                    placeholder="Location"
                    focusBorderColor="#25ABB2"
                    name="location"
                  />
                </GridItem>

                <GridItem rowSpan={1} colSpan={isLessThanMD ? 2 : 1}>
                  <FieldInput
                    placeholder="Condition"
                    focusBorderColor="#25ABB2"
                    name="condition"
                  />
                </GridItem>

                <GridItem rowSpan={1} colSpan={isLessThanMD ? 2 : 1}>
                  <FieldInput
                    placeholder="Any Warranty?"
                    focusBorderColor="#25ABB2"
                    name="warranty"
                  />
                </GridItem>

                <GridItem rowSpan={1} colSpan={2}>
                  <FieldInput
                    placeholder="Description"
                    focusBorderColor="#25ABB2"
                    name="description"
                  />
                </GridItem>

                {isLessThanMD && (
                  <GridItem rowSpan={1} colSpan={2}>
                    <VStack align="stretch" alignItems="center">
                      <Image src={uploadImg} boxSize="120px" />
                      <Input type="file" size="sm" width="70%" />
                    </VStack>
                  </GridItem>
                )}

                <GridItem rowSpan={1} colSpan={2}>
                  <Button
                    width="100%"
                    colorScheme="green"
                    type="button"
                    onClick={formik.handleSubmit}
                  >
                    Add Product
                  </Button>
                </GridItem>
              </Grid>
            </Box>
          </Stack>
        )}
      </Formik>
    </PageWrapper>
  );
}

export default AddCategoryPage;
