const query = `*[_type == 'testimonial'] | order(_createdAt desc) {
    client,
    _id,
    "clientImgUrl":clientImg.asset->url,
    designation,
    social,
    quote,
  }`

import {defineField, defineType} from 'sanity'

export const testimonialsType = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
    }),
    defineField({
      name: 'clientImg',
      title: 'Client Image',
      type: 'image',
    }),
    defineField({
      name: 'social',
      title: 'Social Media Link',
      type: 'url',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
    }),
  ],
})
