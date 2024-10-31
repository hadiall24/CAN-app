/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCANData = /* GraphQL */ `subscription OnCreateCANData($filter: ModelSubscriptionCANDataFilterInput) {
  onCreateCANData(filter: $filter) {
    id
    scan1
    scan2
    scan3
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCANDataSubscriptionVariables,
  APITypes.OnCreateCANDataSubscription
>;
export const onUpdateCANData = /* GraphQL */ `subscription OnUpdateCANData($filter: ModelSubscriptionCANDataFilterInput) {
  onUpdateCANData(filter: $filter) {
    id
    scan1
    scan2
    scan3
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCANDataSubscriptionVariables,
  APITypes.OnUpdateCANDataSubscription
>;
export const onDeleteCANData = /* GraphQL */ `subscription OnDeleteCANData($filter: ModelSubscriptionCANDataFilterInput) {
  onDeleteCANData(filter: $filter) {
    id
    scan1
    scan2
    scan3
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCANDataSubscriptionVariables,
  APITypes.OnDeleteCANDataSubscription
>;
