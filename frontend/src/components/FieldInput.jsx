import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { Field, useField } from "formik";
import React from "react";

function FieldInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <Field
        as={Input}
        //   onChange onBlur value
        {...field}
        {...props}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

export default FieldInput;
