import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'articlesPage',
  title: 'Articles Page',
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
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of: [{type: 'reference', to: {type: 'article'}}],
    }),
    defineField({
      name: 'seoInformation',
      title: 'SEO Information',
      type: 'reference',
      to: [{type: 'seoInformation'}],
    }),
  ],
})
