import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RentalCarMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class RentalCar {
  readonly id: string;
  readonly name: string;
  readonly price?: number;
  readonly description?: string;
  readonly imageUrl?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<RentalCar, RentalCarMetaData>);
  static copyOf(source: RentalCar, mutator: (draft: MutableModel<RentalCar, RentalCarMetaData>) => MutableModel<RentalCar, RentalCarMetaData> | void): RentalCar;
}