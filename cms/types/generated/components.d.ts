import type { Schema, Struct } from '@strapi/strapi';

export interface BlogBlog extends Struct.ComponentSchema {
  collectionName: 'components_blog_blogs';
  info: {
    description: '';
    displayName: 'Blog';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    cover: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CategoryCategory extends Struct.ComponentSchema {
  collectionName: 'components_category_categories';
  info: {
    description: '';
    displayName: 'category';
  };
  attributes: {
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    posts: Schema.Attribute.Component<'blog.blog', true>;
  };
}

export interface GalleryItemGalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_gallery_item_gallery_items';
  info: {
    displayName: 'gallery item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    order: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.blog': BlogBlog;
      'category.category': CategoryCategory;
      'gallery-item.gallery-item': GalleryItemGalleryItem;
    }
  }
}
