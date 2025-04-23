import {type SchemaTypeDefinition} from 'sanity'

import {homeType} from './homeType'
import {categoryType} from './categoryType'
import {blogType} from './blogType'
import {userType} from './userType'
import {blockContentType} from './blockContentType'
import {galleryItemType} from './galleryItem'
import {pricingCardType} from './pricingCardType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    blockContentType,
    pricingCardType,
    galleryItemType,
    homeType,
    categoryType,
    blogType,
    userType
  ]
}
