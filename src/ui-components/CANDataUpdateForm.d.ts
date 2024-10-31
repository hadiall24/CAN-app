/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CANData } from "../API.ts";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CANDataUpdateFormInputValues = {
    scan1?: number;
    scan2?: number;
    scan3?: number;
};
export declare type CANDataUpdateFormValidationValues = {
    scan1?: ValidationFunction<number>;
    scan2?: ValidationFunction<number>;
    scan3?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CANDataUpdateFormOverridesProps = {
    CANDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    scan1?: PrimitiveOverrideProps<TextFieldProps>;
    scan2?: PrimitiveOverrideProps<TextFieldProps>;
    scan3?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CANDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: CANDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cANData?: CANData;
    onSubmit?: (fields: CANDataUpdateFormInputValues) => CANDataUpdateFormInputValues;
    onSuccess?: (fields: CANDataUpdateFormInputValues) => void;
    onError?: (fields: CANDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CANDataUpdateFormInputValues) => CANDataUpdateFormInputValues;
    onValidate?: CANDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CANDataUpdateForm(props: CANDataUpdateFormProps): React.ReactElement;
