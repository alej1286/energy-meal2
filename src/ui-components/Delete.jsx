/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function Delete(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="80px"
      height="26px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Delete")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Delete"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
