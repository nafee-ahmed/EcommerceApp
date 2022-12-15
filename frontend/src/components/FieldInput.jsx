import { FormControl, FormErrorMessage, Input, Radio } from "@chakra-ui/react";
import { Field, useField } from "formik";
import React from "react";

function FieldInput({ label, isError = false, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={(meta.error && meta.touched) || isError}>
      <Field
        as={label === "radio" ? Radio : Input}
        //   onChange onBlur value
        {...field}
        {...props}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

export default FieldInput;
