// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CANData } = initSchema(schema);

export {
  CANData
};