import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fortyNawawi',
  title: 'Forty Nawawi',
  type: 'document',
  fields: [
    defineField({
      name: 'indexid',
      title: 'index Id',
      type: 'number',
    }),
    defineField({
      name: 'numbersofhadith',
      title: 'Hadith Number',
      type: 'string',
    }),
    defineField({
      name: 'nameofhadith',
      title: 'Hadith Names',
      type: 'string',
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
