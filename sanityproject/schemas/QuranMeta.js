import {defineField, defineType} from 'sanity'
export default defineType({
  type: 'document',
  name: 'meta',
  fields: [
    defineField({name: 'number', type: 'number'}),
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'page', type: 'number'}),
    defineField({name: 'englishName', type: 'string'}),
    defineField({name: 'englishNameTranslation', type: 'string'}),
    defineField({name: 'numberOfAyahs', type: 'number'}),
    defineField({name: 'revelationType', type: 'string'}),
  ],
})
