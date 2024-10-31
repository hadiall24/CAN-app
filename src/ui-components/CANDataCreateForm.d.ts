/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CANDataCreateFormInputValues = {
    scan1?: number;
    scan2?: number;
    scan3?: number;
};
export declare type CANDataCreateFormValidationValues = {
    scan1?: ValidationFunction<number>;
    scan2?: ValidationFunction<number>;
    scan3?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CANDataCreateFormOverridesProps = {
    CANDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    scan1?: PrimitiveOverrideProps<TextFieldProps>;
    scan2?: PrimitiveOverrideProps<TextFieldProps>;
    scan3?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CANDataCreateFormProps = React.PropsWithChildren<{
    overrides?: CANDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CANDataCreateFormInputValues) => CANDataCreateFormInputValues;
    onSuccess?: (fields: CANDataCreateFormInputValues) => void;
    onError?: (fields: CANDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CANDataCreateFormInputValues) => CANDataCreateFormInputValues;
    onValidate?: CANDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function CANDataCreateForm(props: CANDataCreateFormProps): React.ReactElement;
