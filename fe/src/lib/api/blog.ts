import {client} from '@/sanity/lib/client'
import {Blog, Root} from '../types'
import {axiosInstance} from './instance'

export async function getBlog(id: string) {
  const response = await axiosInstance.get<{
    data: Root['data'][0]['blogs'][0]
  }>(`/blogs/${id}?populate=*`)
  return response.data
}

import {queryOptions} from '@tanstack/react-query'

export const blogsOptions = queryOptions({
  queryKey: ['blogs'],
  queryFn: async () => {
    const response = await axiosInstance.get<{
      data: Blog[]
    }>(`/blogs?populate=*`)

    return response.data
  }
})

export async function getBlogs() {
  try {
    const blogs = await client.fetch('*[_type == "blog"]', {}, {next: {revalidate: 600}})
    return blogs
  } catch (error) {
    return []
  }
}
export async function getBlogById(id: string) {
  try {
    const blog = await client.fetch(`*[_type == "blog" && _id == "${id}"][0]`, {})
    return blog
  } catch (error) {
    return []
  }
}
