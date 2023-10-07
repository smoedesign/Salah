import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'namesofallah',
  title: 'Names of Allah',
  type: 'document',
  fields: [
    defineField({
      name: 'indexid',
      title: 'index Id',
      type: 'number',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})
