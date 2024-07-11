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
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ServiceCard(props) {
  const { service, ui, imageFrame, overrides, ...rest } = props;
  const deleteButtonOnClick = useDataStoreDeleteAction({
    id: service?.id,
    model: Service,
    schema: schema,
  });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="192px"
      height="329px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="7px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ServiceCard")}
      {...rest}
    >
      <Flex
        gap="5px"
        direction="column"
        width="180px"
        height="313px"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 14452251")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="6px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "imageFrame")}
        >
          <Image
            width="unset"
            height="206px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={service?.imagePath}
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 14451250")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Name")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="15px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={service?.type}
              {...getOverrideProps(overrides, "Type")}
            ></Text>
            <Flex
              gap="2px"
              direction="row"
              width="unset"
              height="31px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 419")}
            >
              <Text
                fontFamily="Font Awesome 5 Free"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="25px"
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
                fontFamily="Font Awesome 5 Free"
                fontSize="20px"
                fontWeight="900"
                color="rgba(13,26,38,1)"
                lineHeight="25px"
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
                children={service?.price}
                {...getOverrideProps(overrides, "Price")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="flex-end"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 418")}
        >
          <Button
            width="69px"
            height="30px"
            overflow="hidden"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Edit"
            {...getOverrideProps(overrides, "EditButton")}
          ></Button>
          <Button
            width="69px"
            height="30px"
            overflow="hidden"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Delete"
            onClick={() => {
              deleteButtonOnClick();
            }}
            {...getOverrideProps(overrides, "DeleteButton")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
