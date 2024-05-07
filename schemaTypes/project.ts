import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'string',
      options: {
        list: [
          {title: 'planetaria', value: 'planetaria'},
          {title: 'animaginary', value: 'animaginary'},
          {title: 'helio-stream', value: 'helio-stream'},
          {title: 'cosmos', value: 'cosmos'},
          {title: 'open-shuttle', value: 'open-shuttle'},
          {title: 'GithubIcon', value: 'GithubIcon'},
          {title: 'logoOne', value: 'logoOne'},
          {title: 'logoSecond', value: 'logoSecond'},
          {title: 'logoThird', value: 'logoThird'},
          {title: 'logoFourth', value: 'logoFourth'},
          {title: 'logoFifth', value: 'logoFifth'},
          {title: 'logoSixt', value: 'logoSixt'},
        ],
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'href',
              title: 'href',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
})
