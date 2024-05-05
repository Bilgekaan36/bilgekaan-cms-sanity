import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'informationSection',
  title: 'Information Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'newsletter',
      title: 'Newsletter',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'downloadButtonText',
      title: 'Download Button Text',
      type: 'string',
    }),
    defineField({
      name: 'resumeTitle',
      title: 'Resume Title',
      type: 'string',
    }),
    defineField({
      name: 'resumes',
      title: 'Resumes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'resume'}}],
    }),
  ],
})
