import { type SchemaTypeDefinition } from 'sanity'
import { serviceType } from './schemaTypes/service'
import { typeOfService } from './schemaTypes/typeOfService'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceType, typeOfService],
}
