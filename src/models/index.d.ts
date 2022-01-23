import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CarMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Car {
  readonly id: string;
  readonly name?: string;
  readonly price?: number;
  readonly description?: string;
  readonly imageUrl?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Car, CarMetaData>);
  static copyOf(source: Car, mutator: (draft: MutableModel<Car, CarMetaData>) => MutableModel<Car, CarMetaData> | void): Car;
}