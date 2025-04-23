import {defineType} from 'sanity'

export const galleryItemType = defineType({
  name: 'gallery_item',
  title: 'Gallery Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ]
})
