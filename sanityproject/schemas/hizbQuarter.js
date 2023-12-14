import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'hizbQuarter',
  fields: [
    defineField({name: 'hizbQuarter', type: 'number'}),
    defineField({name: 'ayahs', type: 'array', of: [{type: 'reference', to: [{type: 'ayahs'}]}]}),
  ],
})
