import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Stack,
  useMediaQuery,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import uploadImg from "../assets/uploading-img.png";
import CustomRadio from "../components/CustomRadio";
import FieldInput from "../components/FieldInput";
import PageWrapper from "../components/PageWrapper";
import TagInput from "../components/TagInput";
import { ax } from "../utils/constants";

function AddCategoryPage() {
  const [isLessThanMD] = useMediaQuery("(max-width: 48em)");
  const [isLessThanSM] = useMediaQuery("(max-width: 30em)");
  const toast = useToast();
  const [loading, setLoading] = useState(false);

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
          tags: [],
          condition: "",
          quantity: "",
          description: "",
        }}
        validationSchema={Yup.object({
          productName: Yup.string().required("Product name required"),
          isDelivery: Yup.string().required("Delivery option required"),
          price: Yup.number().required("Price required"),
          tags: Yup.array()
            .of(Yup.string())
            .min(2, "Enter at least 2 tags")
            .max(3, "Enter maximum 3 tags")
            .required("Tags required"),
          condition: Yup.string().required("Condition required"),
          quantity: Yup.number().required("Quantity required"),
          description: Yup.string().required("Description required"),
        })}
        onSubmit={async (values, actions) => {
          setLoading(true);
          try {
            const res = await ax.post(
              `/category?type=${cat.toLowerCase()}`,
              values
            );
            console.log(res.data);
            toast({
              title: `Added!`,
              status: "success",
              isClosable: true,
            });
          } catch (err) {
            toast({
              title: `${err.response?.data}`,
              status: "error",
              isClosable: true,
            });
          }
          setLoading(false);

          // alert(JSON.stringify(values, null, 2));
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
                templateRows="repeat(7, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={5}
              >
                <GridItem rowSpan={1} colSpan={2}>
                  <FieldInput
                    placeholder="Product Name"
                    focusBorderColor="#25ABB2"
                    name="productName"
                  />
                </GridItem>

                <GridItem rowSpan={1} colSpan={isLessThanMD ? 2 : 1}>
                  <FieldInput
                    type="number"
                    placeholder="Price"
                    focusBorderColor="#25ABB2"
                    name="price"
                  />
                </GridItem>

                <GridItem
                  rowSpan={1}
                  colSpan={isLessThanMD ? 2 : 1}
                  justifySelf={isLessThanSM ? "end" : "start"}
                >
                  <CustomRadio name="isDelivery" />
                </GridItem>

                <GridItem rowSpan={1} colSpan={2}>
                  <TagInput
                    placeholder="Tags"
                    focusBorderColor="#25ABB2"
                    name="tags"
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
                    type="number"
                    placeholder="Enter quantity available"
                    focusBorderColor="#25ABB2"
                    name="quantity"
                  />
                </GridItem>

                <GridItem rowSpan={2} colSpan={2}>
                  <FieldInput
                    label="textbox"
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
                    disabled={loading}
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
