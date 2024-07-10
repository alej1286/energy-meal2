/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Service } from "../models";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceCardOverridesProps = {
    ServiceCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 14452251"?: PrimitiveOverrideProps<FlexProps>;
    imageFrame?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 14451250"?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    Type?: PrimitiveOverrideProps<TextProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    EditButton?: PrimitiveOverrideProps<ButtonProps>;
    DeleteButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ServiceCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    service?: Service;
    ui?: React.ReactNode;
    imageFrame?: React.ReactNode;
} & {
    overrides?: ServiceCardOverridesProps | undefined | null;
}>;
export default function ServiceCard(props: ServiceCardProps): React.ReactElement;
