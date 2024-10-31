/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCANDataInput = {
  id?: string | null,
  scan1?: number | null,
  scan2?: number | null,
  scan3?: number | null,
};

export type ModelCANDataConditionInput = {
  scan1?: ModelIntInput | null,
  scan2?: ModelIntInput | null,
  scan3?: ModelIntInput | null,
  and?: Array< ModelCANDataConditionInput | null > | null,
  or?: Array< ModelCANDataConditionInput | null > | null,
  not?: ModelCANDataConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type CANData = {
  __typename: "CANData",
  id: string,
  scan1?: number | null,
  scan2?: number | null,
  scan3?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCANDataInput = {
  id: string,
  scan1?: number | null,
  scan2?: number | null,
  scan3?: number | null,
};

export type DeleteCANDataInput = {
  id: string,
};

export type ModelCANDataFilterInput = {
  id?: ModelIDInput | null,
  scan1?: ModelIntInput | null,
  scan2?: ModelIntInput | null,
  scan3?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCANDataFilterInput | null > | null,
  or?: Array< ModelCANDataFilterInput | null > | null,
  not?: ModelCANDataFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCANDataConnection = {
  __typename: "ModelCANDataConnection",
  items:  Array<CANData | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCANDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  scan1?: ModelSubscriptionIntInput | null,
  scan2?: ModelSubscriptionIntInput | null,
  scan3?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCANDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionCANDataFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateCANDataMutationVariables = {
  input: CreateCANDataInput,
  condition?: ModelCANDataConditionInput | null,
};

export type CreateCANDataMutation = {
  createCANData?:  {
    __typename: "CANData",
    id: string,
    scan1?: number | null,
    scan2?: number | null,
    scan3?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCANDataMutationVariables = {
  input: UpdateCANDataInput,
  condition?: ModelCANDataConditionInput | null,
};

export type UpdateCANDataMutation = {
  updateCANData?:  {
    __typename: "CANData",
    id: string,
    scan1?: number | null,
    scan2?: number | null,
    scan3?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCANDataMutationVariables = {
  input: DeleteCANDataInput,
  condition?: ModelCANDataConditionInput | null,
};

export type DeleteCANDataMutation = {
  deleteCANData?:  {
    __typename: "CANData",
    id: string,
    scan1?: number | null,
    scan2?: number | null,
    scan3?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCANDataQueryVariables = {
  id: string,
};

export type GetCANDataQuery = {
  getCANData?:  {
    __typename: "CANData",
    id: string,
    scan1?: number | null,
    scan2?: number | null,
    scan3?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCANDataQueryVariables = {
  filter?: ModelCANDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCANDataQuery = {
  listCANData?:  {
    __typename: "ModelCANDataConnection",
    items:  Array< {
      __typename: "CANData",
      id: string,
      scan1?: number | null,
      scan2?: number | null,
      scan3?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCANDataSubscriptionVariables = {
  filter?: ModelSubscriptionCANDataFilterInput | null,
};

export type OnCreateCANDataSubscription = {
  onCreateCANData?:  {
    __typename: "CANData",
    id: string,
    scan1?: number | null,
    scan2?: number | null,
    scan3?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCANDataSubscriptionVariables = {
  filter?: ModelSubscriptionCANDataFilterInput | null,
};

export type OnUpdateCANDataSubscription = {
  onUpdateCANData?:  {
    __typename: "CANData",
    id: string,
    scan1?: number | null,
    scan2?: number | null,
    scan3?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCANDataSubscriptionVariables = {
  filter?: ModelSubscriptionCANDataFilterInput | null,
};

export type OnDeleteCANDataSubscription = {
  onDeleteCANData?:  {
    __typename: "CANData",
    id: string,
    scan1?: number | null,
    scan2?: number | null,
    scan3?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
