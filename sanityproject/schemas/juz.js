import {defineField, defineType} from 'sanity'
export default defineType({
  type: 'document',
  name: 'juz',
  fields: [
    defineField({name: 'number', type: 'number'}),
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'ayahs', type: 'array', of: [{type: 'reference', to: [{type: 'ayahs'}]}]}),
  ],
})
