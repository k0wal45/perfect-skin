import {defineField, defineType} from 'sanity'

export const typeOfService = defineType({
  name: 'klasa',
  title: 'Klasa',
  type: 'document',
  fields: [
    defineField({
      name: 'nazwa',
      type: 'string',
    }),
  ],
})