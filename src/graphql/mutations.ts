/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCANData = /* GraphQL */ `mutation CreateCANData(
  $input: CreateCANDataInput!
  $condition: ModelCANDataConditionInput
) {
  createCANData(input: $input, condition: $condition) {
    id
    scan1
    scan2
    scan3
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCANDataMutationVariables,
  APITypes.CreateCANDataMutation
>;
export const updateCANData = /* GraphQL */ `mutation UpdateCANData(
  $input: UpdateCANDataInput!
  $condition: ModelCANDataConditionInput
) {
  updateCANData(input: $input, condition: $condition) {
    id
    scan1
    scan2
    scan3
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCANDataMutationVariables,
  APITypes.UpdateCANDataMutation
>;
export const deleteCANData = /* GraphQL */ `mutation DeleteCANData(
  $input: DeleteCANDataInput!
  $condition: ModelCANDataConditionInput
) {
  deleteCANData(input: $input, condition: $condition) {
    id
    scan1
    scan2
    scan3
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCANDataMutationVariables,
  APITypes.DeleteCANDataMutation
>;
