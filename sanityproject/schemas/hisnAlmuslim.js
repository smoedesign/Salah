import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hisnAlmuslim',
  title: 'Hisn AL muslim',
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
      name: 'alazkar',
      title: 'Al azkar',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'alazkar'}]}],
    }),
  ],
})
