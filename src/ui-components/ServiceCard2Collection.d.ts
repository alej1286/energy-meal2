/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ServiceCard2Props } from "./ServiceCard2";
import { CollectionProps } from "@aws-amplify/ui-react";
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
export declare type ServiceCard2CollectionOverridesProps = {
    ServiceCard2Collection?: PrimitiveOverrideProps<CollectionProps>;
    ServiceCard2?: ServiceCard2Props;
} & EscapeHatchProps;
export declare type ServiceCard2CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ServiceCard2Props;
} & {
    overrides?: ServiceCard2CollectionOverridesProps | undefined | null;
}>;
export default function ServiceCard2Collection(props: ServiceCard2CollectionProps): React.ReactElement;
