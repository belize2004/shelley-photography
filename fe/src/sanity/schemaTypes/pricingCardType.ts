import {defineType} from 'sanity'

export const pricingCardType = defineType({
  title: 'Block',
  name: 'blockObject',
  type: 'object',
  fields: [
    {
      title: 'Pricing Card',
      name: 'pricing_card',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
})
