import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'showcase',
  title: 'Showcase',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'showcases',
      title: 'Showcases',
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
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'url',
              type: 'string',
            }),
            defineField({
              name: 'path',
              title: 'Path',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
