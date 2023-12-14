import {defineField, defineType} from 'sanity'

export default defineType(
  {
    type: 'document',
    name: 'surahs',
    fields: [
      defineField({name: 'number', type: 'number'}),
      defineField({name: 'name', type: 'string'}),
      defineField({name: 'englishName', type: 'string'}),
      defineField({name: 'englishNameTranslation', type: 'string'}),
      defineField({name: 'revelationType', type: 'string'}),
      defineField({name: 'ayahs', type: 'array', of: [{type: 'reference', to: [{type: 'ayahs'}]}]}),
    ],
  },

)