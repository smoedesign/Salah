import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'ruku',
  fields: [
    defineField({name: 'ruku', type: 'number'}),
    defineField({name: 'ayahs', type: 'array', of: [{type: 'reference', to: [{type: 'ayahs'}]}]}),
  ],
})
