// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Car } = initSchema(schema);

export {
  Car
};