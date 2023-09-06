import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'numberofhadith',
  title: 'Hadith Number',
  type: 'document',
  fields: [
    defineField({
      name: 'numbers',
      title: 'Number Of Hadith',
      type: 'string',
    }),
  ],
})
