import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hisnAlmuslim',
  title: 'Hisn AL muslim',
  type: 'document',
  fields: [
    defineField({
      id: 'id',
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})
