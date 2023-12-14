import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  fields: [
    defineField({name: 'page', type: 'number'}),
    defineField({name: 'ayahs', type: 'array', of: [{type: 'reference', to: [{type: 'ayahs'}]}]}),
  ],
})
