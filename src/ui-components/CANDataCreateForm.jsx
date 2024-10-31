/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createCANData } from "../graphql/mutations";
const client = generateClient();
export default function CANDataCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    scan1: "",
    scan2: "",
    scan3: "",
  };
  const [scan1, setScan1] = React.useState(initialValues.scan1);
  const [scan2, setScan2] = React.useState(initialValues.scan2);
  const [scan3, setScan3] = React.useState(initialValues.scan3);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setScan1(initialValues.scan1);
    setScan2(initialValues.scan2);
    setScan3(initialValues.scan3);
    setErrors({});
  };
  const validations = {
    scan1: [],
    scan2: [],
    scan3: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          scan1,
          scan2,
          scan3,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createCANData.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CANDataCreateForm")}
      {...rest}
    >
      <TextField
        label="Scan1"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={scan1}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              scan1: value,
              scan2,
              scan3,
            };
            const result = onChange(modelFields);
            value = result?.scan1 ?? value;
          }
          if (errors.scan1?.hasError) {
            runValidationTasks("scan1", value);
          }
          setScan1(value);
        }}
        onBlur={() => runValidationTasks("scan1", scan1)}
        errorMessage={errors.scan1?.errorMessage}
        hasError={errors.scan1?.hasError}
        {...getOverrideProps(overrides, "scan1")}
      ></TextField>
      <TextField
        label="Scan2"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={scan2}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              scan1,
              scan2: value,
              scan3,
            };
            const result = onChange(modelFields);
            value = result?.scan2 ?? value;
          }
          if (errors.scan2?.hasError) {
            runValidationTasks("scan2", value);
          }
          setScan2(value);
        }}
        onBlur={() => runValidationTasks("scan2", scan2)}
        errorMessage={errors.scan2?.errorMessage}
        hasError={errors.scan2?.hasError}
        {...getOverrideProps(overrides, "scan2")}
      ></TextField>
      <TextField
        label="Scan3"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={scan3}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              scan1,
              scan2,
              scan3: value,
            };
            const result = onChange(modelFields);
            value = result?.scan3 ?? value;
          }
          if (errors.scan3?.hasError) {
            runValidationTasks("scan3", value);
          }
          setScan3(value);
        }}
        onBlur={() => runValidationTasks("scan3", scan3)}
        errorMessage={errors.scan3?.errorMessage}
        hasError={errors.scan3?.hasError}
        {...getOverrideProps(overrides, "scan3")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
