import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'duaa',
  fields: [
    defineField({name: 'index', type: 'number'}),
    defineField({name: 'duaaText', type: 'string'}),
  ],
})
