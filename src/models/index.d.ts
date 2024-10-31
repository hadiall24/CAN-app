import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCANData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CANData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly scan1?: number | null;
  readonly scan2?: number | null;
  readonly scan3?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCANData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CANData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly scan1?: number | null;
  readonly scan2?: number | null;
  readonly scan3?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CANData = LazyLoading extends LazyLoadingDisabled ? EagerCANData : LazyCANData

export declare const CANData: (new (init: ModelInit<CANData>) => CANData) & {
  copyOf(source: CANData, mutator: (draft: MutableModel<CANData>) => MutableModel<CANData> | void): CANData;
}