import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fortyNawawi',
  title: 'Forty Nawawi',
  type: 'document',
  fields: [
    defineField({
      name: 'numberofhadith',
      title: 'Hadith Number',
      type: 'reference',
      to: [{type: 'numberofhadith'}],
    }),
    defineField({
      name: 'namesofhadith',
      title: 'Hadith Name',
      type: 'reference',
      to: [{type: 'namesofhadith'}],
    }),
    defineField({
      name: 'description',
      title: 'Hadith Description',
      type: 'string',
    }),
    defineField({
      name: 'reference',
      title: 'Reference',
      type: 'string',
    }),
  ],
})
