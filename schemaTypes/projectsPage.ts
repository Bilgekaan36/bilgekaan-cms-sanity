import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectsPage',
  title: 'Projects Page',
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
      name: 'githubProjects',
      title: 'Github Projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}],
    }),
    defineField({
      name: 'seoInformation',
      title: 'SEO Information',
      type: 'reference',
      to: [{type: 'seoInformation'}],
    }),
  ],
})
