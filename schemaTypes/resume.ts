import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'start',
      title: 'Start',
      type: 'number',
    }),
    defineField({
      name: 'end',
      title: 'End',
      type: 'number',
    }),
    defineField({
      name: 'endData',
      title: 'End Data',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
        {
          name: 'dateTime',
          title: 'Date Time',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'string',
      options: {
        list: [
          {title: 'Planetaria', _key: 'planetaria', value: 'planetaria'},
          {title: 'Workdigital', _key: 'Workdigital', value: 'workdigital'},
          {title: 'Init Group', _key: 'Init Group', value: 'initgroup'},
        ],
      },
    }),
  ],
})
