// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RentalCar } = initSchema(schema);

export {
  RentalCar
};