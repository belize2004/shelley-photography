import {HomeIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'gallery_item'}]
    },
    {
      name: 'blogs',
      title: 'Blogs',
      type: 'reference',
      to: [{type: 'blog'}]
    }
  ]
})
