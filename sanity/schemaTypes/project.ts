import {defineField, defineType} from 'sanity'

export const projectsType = defineType({
  name: 'project',
  title: 'Project',
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
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'purpose',
      title: 'Purpose',
      type: 'string',
      options: {
        list: [
          {title: 'Side Project', value: 'side-project'},
          {title: 'Freelance Project', value: 'freelance'},
          {title: 'Internship Project', value: 'internship'},
          {title: 'Open Source Project', value: 'open-source'},
        ],
      },
    }),
    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [{name: 'icon', type: 'image'}],
    }),
  ],
})
