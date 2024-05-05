import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'socialMedia',
      options: {
        list: [
          {title: 'X', value: 'XIcon'},
          {title: 'Github', value: 'GitHubIcon'},
          {title: 'Instagram', value: 'InstagramIcon'},
          {title: 'LinkedIn', value: 'LinkedInIcon'},
          {title: 'Mail', value: 'MailIcon'},
        ],
      },
    }),
    defineField({type: 'string', name: 'link'}),
    defineField({type: 'string', name: 'description'}),
  ],
})
