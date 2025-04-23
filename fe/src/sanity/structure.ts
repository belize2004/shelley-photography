import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('category').title('Category'),
      S.documentTypeListItem('home').title('Home'),
      S.documentTypeListItem('blog').title('Blog'),
      S.documentTypeListItem('user').title('User'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['category', 'home', 'blog', 'user'].includes(item.getId()!)
      )
    ])
