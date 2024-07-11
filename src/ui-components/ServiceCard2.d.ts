/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Service } from "../models";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { EditProps } from "./Edit";
import { DeleteProps } from "./Delete";
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
export declare type ServiceCard2OverridesProps = {
    ServiceCard2?: PrimitiveOverrideProps<FlexProps>;
    FrameHorParent?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    "Frame Right Col"?: PrimitiveOverrideProps<FlexProps>;
    "Frame Cont Row"?: PrimitiveOverrideProps<FlexProps>;
    "Frame Metadata"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Frame Content Price"?: PrimitiveOverrideProps<FlexProps>;
    $?: PrimitiveOverrideProps<TextProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
    "Frame Button Row"?: PrimitiveOverrideProps<FlexProps>;
    "Frame Edit"?: PrimitiveOverrideProps<FlexProps>;
    Edit?: EditProps;
    "Frame delete"?: PrimitiveOverrideProps<FlexProps>;
    Delete?: DeleteProps;
} & EscapeHatchProps;
export declare type ServiceCard2Props = React.PropsWithChildren<Partial<FlexProps> & {
    service?: Service;
} & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: ServiceCard2OverridesProps | undefined | null;
}>;
export default function ServiceCard2(props: ServiceCard2Props): React.ReactElement;
