import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sibha',
  title: 'Sibha',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Id',
      type: 'number',
    }),
    defineField({
      name: 'ziker',
      title: 'Azkar',
      type: 'string',
    }),
  ],
})
