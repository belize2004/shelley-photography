export interface Root {
  data: Daum[];
  meta: Meta;
}

export interface Daum {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  photos: Photo[];
  blogs: Blog[];
}

export interface Photo {
  [x: string]: string;
  id: number;
  documentId: string;
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  related: Related[];
}

export interface Formats {
  thumbnail: Thumbnail;
  medium: Medium;
  small: Small;
  large: Large;
}

export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Medium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Related {
  __type: string;
  id: number;
  title?: string;
  desc?: string;
  content?: Content[];
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  name?: string;
}

export interface Content {
  type: string;
  children: Children[];
}

export interface Children {
  type: string;
  text: string;
}

export interface Blog {
  id: number;
  documentId: string;
  title: string;
  content: Content2[];
  desc: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Cover;
}

export interface Content2 {
  type: string;
  children: Children2[];
}

export interface Children2 {
  type: string;
  text: string;
}

export interface Cover {
  id: number;
  documentId: string;
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats2;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Formats2 {
  thumbnail: Thumbnail2;
  medium: Medium2;
  small: Small2;
  large: Large2;
}

export interface Thumbnail2 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Medium2 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Small2 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Large2 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
