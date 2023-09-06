import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'namesofhadith',
  title: 'Hadith Names',
  type: 'document',
  fields: [
    defineField({
      name: 'numbers',
      title: 'Number Of Hadith',
      type: 'string',
    }),
  ],
})
