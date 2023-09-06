import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'alazkar',
  title: 'Al azkar',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'hisnAlmuslim'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'refrance',
      title: 'Refrance',
      type: 'string',
    }),
    defineField({
      name: 'count',
      title: 'Count',
      type: 'number',
    }),
    defineField({
      name: 'countnumber',
      title: 'Count Number',
      type: 'string',
    }),
  ],
})
