/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Service } from "../models";
import { getOverrideProps, useDataStoreDeleteAction } from "./utils";
import { schema } from "../models/schema";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import Edit from "./Edit";
import Delete from "./Delete";
export default function ServiceCard2(props) {
  const { service, overrides, ...rest } = props;
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
          {...getOverrideProps(overrides, "Frame Right Col")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="55.5px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame Cont Row")}
          >
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
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
            height="55.5px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
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
