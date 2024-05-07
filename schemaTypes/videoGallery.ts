import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videoGallery',
  title: 'Video Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
  ],
})
