import {defineField, defineType} from 'sanity'
export default defineType({
  type: 'document',
  name: 'ayahs',
  fields: [
    defineField({name: 'number', type: 'number'}),
    defineField({name: 'text', type: 'string'}),
    defineField({name: 'numberInSurah', type: 'number'}),
    defineField({name: 'juz', type: 'reference', to: [{type: 'juz'}]}),
    defineField({name: 'manzil', type: 'number'}),
    defineField({name: 'page', type: 'reference', to: [{type: 'page'}]}),
    defineField({name: 'ruku', type: 'reference', to: [{type: 'ruku'}]}),
    defineField({name: 'hizbQuarter', type: 'reference', to: [{type: 'hizbQuarter'}]}),
    defineField({name: 'sajda', type: 'boolean'}),
  ],
})
