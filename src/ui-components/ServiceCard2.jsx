/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Service } from "../models";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useDataStoreDeleteAction,
} from "./utils";
import { Flex, Image, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import { schema } from "../models/schema";
import Edit from "./Edit";
import Delete from "./Delete";
export default function ServiceCard2(props) {
  const { service, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Image: {},
        Title: {},
        $: {},
        Price: {},
        "Frame Content Price": {},
        "Frame Metadata": {},
        "Frame Cont Row": {},
        Edit: {},
        "Frame Edit": {},
        Delete: {},
        "Frame delete": {},
        "Frame Button Row": {},
        "Frame Right Col": {},
        FrameHorParent: {},
        ServiceCard2: {},
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        Image: { width: "180px", height: "180px" },
        Title: {},
        $: {},
        Price: {},
        "Frame Content Price": {},
        "Frame Metadata": { height: "85px" },
        "Frame Cont Row": {},
        Edit: { width: "95px", height: "40px" },
        "Frame Edit": { width: "unset" },
        Delete: { width: "95px", height: "40px" },
        "Frame delete": { width: "unset" },
        "Frame Button Row": { alignItems: "flex-end" },
        "Frame Right Col": { height: "151px" },
        FrameHorParent: {},
        ServiceCard2: { width: "768px" },
      },
      variantValues: { breakpoint: "medium" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    medium: "medium",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  const framedeleteOnClick = useDataStoreDeleteAction({
    id: service?.id,
    model: Service,
    schema: schema,
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="358px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 16px 32px rgba(0.0470588244497776, 0.0470588244497776, 0.05098039284348488, 0.4000000059604645)"
      borderRadius="10px"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "ServiceCard2")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="2px 2px 2px 2px"
        display="flex"
        {...getOverrideProps(overrides, "FrameHorParent")}
      >
        <Image
          width="125px"
          height="125px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={service?.imagePath}
          {...getOverrideProps(overrides, "Image")}
        ></Image>
        <Flex
          gap="4px"
          direction="column"
          width="unset"
          height="115px"
          justifyContent="space-between"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame Right Col")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="10px 10px 10px 10px"
            display="flex"
            {...getOverrideProps(overrides, "Frame Cont Row")}
          >
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="68px"
              justifyContent="center"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame Metadata")}
            >
              <Text
                fontFamily="Lato"
                fontSize="15px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
                lineHeight="22.5px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="28px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={service?.type}
                {...getOverrideProps(overrides, "Title")}
              ></Text>
              <Flex
                gap="2px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="space-between"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame Content Price")}
              >
                <Text
                  fontFamily="Lato"
                  fontSize="16px"
                  fontWeight="700"
                  color="rgba(0,0,0,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="$"
                  {...getOverrideProps(overrides, "$")}
                ></Text>
                <Text
                  fontFamily="Lato"
                  fontSize="16px"
                  fontWeight="700"
                  color="rgba(0,0,0,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={service?.price}
                  {...getOverrideProps(overrides, "Price")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="25px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame Button Row")}
          >
            <Flex
              gap="10px"
              direction="column"
              width="80px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame Edit")}
            >
              <Edit
                display="flex"
                gap="0"
                direction="row"
                width="unset"
                height="26px"
                justifyContent="flex-start"
                alignItems="flex-start"
                overflow="hidden"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                borderRadius="10px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Edit")}
              ></Edit>
            </Flex>
            <Flex
              gap="10px"
              direction="column"
              width="80px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              onClick={() => {
                framedeleteOnClick();
              }}
              {...getOverrideProps(overrides, "Frame delete")}
            >
              <Delete
                display="flex"
                gap="0"
                direction="row"
                width="unset"
                height="26px"
                justifyContent="flex-start"
                alignItems="flex-start"
                overflow="hidden"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                borderRadius="10px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Delete")}
              ></Delete>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
