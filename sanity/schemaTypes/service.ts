import {defineField, defineType} from 'sanity'
import { Rule } from "sanity";

export const serviceType = defineType({
  name: 'zabieg',
  title: 'Zabieg',
  type: 'document',
  fields: [
    defineField({
      name: 'nazwa',
      title: 'Nazwa',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
    }),
    defineField({
      name: 'klasa',
      type: 'reference',
      to: [{type: 'klasa'}],
    }),
    defineField({
      name: 'krotkiOpis',
      type: 'string',
      validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters")
    }),
    defineField({
      name: 'dlugiOpis',
      type: 'string',
    }),
    defineType({
      name: 'galeriaZdjec',
      title: 'Galeria Zdjęć',
      type: 'array',
      of: [{ type: 'image' }]
    }),
  ],
})