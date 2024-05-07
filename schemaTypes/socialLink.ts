import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  fields: [
    defineField({
      name: 'socialMedia',
      type: 'string',
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
