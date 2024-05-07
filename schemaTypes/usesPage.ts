import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'usesPage',
  title: 'Uses Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'tools',
              title: 'Tools',
              type: 'array',
              of: [{type: 'reference', to: [{type: 'tool'}]}],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'seoInformation',
      title: 'SEO Information',
      type: 'reference',
      to: [{type: 'seoInformation'}],
    }),
  ],
})
