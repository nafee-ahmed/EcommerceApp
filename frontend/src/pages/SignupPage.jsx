import {
  Box,
  Button,
  Flex,
  Heading,
  Hide,
  HStack,
  Image,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import SignupImage from "../assets/signup-image.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import FieldInput from "../components/FieldInput";

function SignupPage() {
  const [isLessThanLG] = useMediaQuery("(max-width: 62em)");
  const formWidth = { base: "100%", sm: "100%", lg: "70%" };

  const navigate = useNavigate();

  return (
    <HStack w="100%" h="100vh">
      <VStack
        w="100%"
        h="100%"
        p={8}
        alignItems="start"
        justifyContent="center"
        spacing={5}
        maxW={{ base: "100%", sm: "100%", lg: "50%", xl: "50%" }}
      >
        <Image src={logo} w="130px" />
        <Heading as="h3" fontWeight="medium" fontSize="2xl">
          Sign Up
        </Heading>
        <Heading as="h1" fontWeight="bold">
          Let Us Help You Wisely.
        </Heading>
        <Text fontSize={12}>
          Our Platform provides UiTM Students to sell services and product
          online.
        </Text>

        <Formik
          initialValues={{ username: "", email: "", phone: "", password: "" }}
          validationSchema={Yup.object({
            username: Yup.string().required("Name required"),
            email: Yup.string()
              .email("Invalid email format")
              .required("Email required"),
            phone: Yup.string()
              .required("Phone required")
              .length(8, "Must have a minimum 8 digits"),
            password: Yup.string()
              .required("Password required")
              .min(6, "Password is too short"),
          })}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
          }}
        >
          {(formik) => (
            <VStack w={formWidth} spacing={5}>
              <FieldInput
                placeholder="Full Name"
                focusBorderColor="#25ABB2"
                name="username"
              />

              <FieldInput
                placeholder="Email Address"
                type="email"
                focusBorderColor="#25ABB2"
                name="email"
              />

              <FieldInput
                placeholder="Phone Number"
                type="number"
                focusBorderColor="#25ABB2"
                name="phone"
              />

              <FieldInput
                placeholder="Password"
                type="password"
                focusBorderColor="#25ABB2"
                name="password"
              />

              <Button
                color="white"
                colorScheme="green"
                width="100%"
                type="button"
                onClick={formik.handleSubmit}
              >
                Sign Up
              </Button>

              <Box display="flex" justifyContent="center">
                <Text fontSize={14}>Already have an account?</Text>
              </Box>
              <Button
                width="100%"
                color="white"
                colorScheme="teal"
                type="button"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </VStack>
          )}
        </Formik>
      </VStack>

      <Hide below="base">
        <Flex
          w="100%"
          h="100%"
          maxW={{ base: "0%", sm: "0%", lg: "50%", xl: "50%" }}
        >
          <Image
            fit="cover"
            w="100%"
            h="100%"
            src={SignupImage}
            pos="relative"
          />

          <Flex
            flexDir="column"
            justifyContent="end"
            h="100%"
            pb="10"
            pl="5"
            pos="absolute"
            display={isLessThanLG ? "none" : "flex"}
          >
            <Heading
              as="h1"
              fontWeight="bold"
              color="white"
              fontSize={{ sm: "5xl", lg: "6xl" }}
            >
              Safe & Reliable
            </Heading>
            <Text color="white" fontWeight="semibold" fontSize="2xl">
              We Help Students Sell Services and Goods Across the Campus.
              Students can register and start selling their past books or offer
              help to other students. Together we are stronger!
            </Text>
          </Flex>
        </Flex>
      </Hide>
    </HStack>
  );
}

export default SignupPage;
