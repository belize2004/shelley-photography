import {FileText} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: FileText,
  fields: [
    defineField({
      name: 'name',
      type: 'string'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string'
    }),
    defineField({
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        })
      ]
    }),
    defineField({
      name: 'home',
      title: 'Home',
      type: 'reference',
      to: [{type: 'home'}]
    })
  ]
  // preview: {
  //   select: {
  //     title: 'title',
  //     blog: 'blog.name',
  //     media: 'photo'
  //   },
  //   prepare(selection) {
  //     const {blog} = selection
  //     return {...selection, subtitle: blog && `by ${blog}`}
  //   }
  // }
})
