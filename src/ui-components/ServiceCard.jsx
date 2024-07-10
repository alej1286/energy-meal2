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
import { Button, Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
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
      justifyContent="center"
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
        gap="24px"
        direction="column"
        width="180px"
        height="315px"
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
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="6px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "imageFrame")}
        >
          <Image
            width="unset"
            height="unset"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
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
          height="117px"
          justifyContent="space-between"
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
            justifyContent="space-between"
            alignItems="center"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
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
              height="unset"
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
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 419")}
            >
              <Icon
                width="8px"
                height="17px"
                viewBox={{ minX: 0, minY: 0, width: 8, height: 17 }}
                paths={[
                  {
                    d: "M5.81135 7.74961L2.8107 6.70039C2.46341 6.58086 2.22169 6.19238 2.22169 5.76074C2.22169 5.21953 2.58843 4.78125 3.04131 4.78125L4.88337 4.78125C5.22233 4.78125 5.55574 4.9041 5.83357 5.12988C6.00306 5.26602 6.23088 5.23281 6.37536 5.06348L7.34223 3.93457C7.5395 3.70547 7.51171 3.32363 7.29222 3.12109C6.61152 2.48359 5.76134 2.12832 4.88893 2.125L4.88893 0.53125C4.88893 0.239063 4.68888 0 4.44439 0L3.55531 0C3.31081 0 3.11077 0.239063 3.11077 0.53125L3.11077 2.125L3.04131 2.125C1.27148 2.125 -0.151044 3.94121 0.0128797 6.09609C0.129571 7.62676 1.10756 8.87188 2.34116 9.30352L5.18899 10.2996C5.53629 10.4225 5.77801 10.8076 5.77801 11.2393C5.77801 11.7805 5.41126 12.2188 4.95839 12.2188L3.11632 12.2188C2.77736 12.2188 2.44396 12.0959 2.16612 11.8701C1.99664 11.734 1.76881 11.7672 1.62434 11.9365L0.657463 13.0654C0.460198 13.2945 0.487982 13.6764 0.707473 13.8789C1.38818 14.5164 2.23836 14.8717 3.11077 14.875L3.11077 16.4688C3.11077 16.7609 3.31081 17 3.55531 17L4.44439 17C4.68888 17 4.88893 16.7609 4.88893 16.4688L4.88893 14.8684C6.18365 14.8385 7.3978 13.9187 7.82567 12.4545C8.42302 10.4092 7.42003 8.31074 5.81135 7.74961Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Vector")}
              ></Icon>
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
                children="100"
                {...getOverrideProps(overrides, "Price")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="33px"
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
