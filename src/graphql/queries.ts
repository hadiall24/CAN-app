/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCANData = /* GraphQL */ `query GetCANData($id: ID!) {
  getCANData(id: $id) {
    id
    scan1
    scan2
    scan3
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCANDataQueryVariables,
  APITypes.GetCANDataQuery
>;
export const listCANData = /* GraphQL */ `query ListCANData(
  $filter: ModelCANDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listCANData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      scan1
      scan2
      scan3
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCANDataQueryVariables,
  APITypes.ListCANDataQuery
>;
