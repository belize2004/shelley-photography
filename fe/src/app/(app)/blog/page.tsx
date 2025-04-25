import PageClient from './page.client'
// import {getQueryClient} from '../../get-query-client'
import {getBlogs} from '@/lib/api/blog'
// import {HydrationBoundary, dehydrate} from '@tanstack/react-query'

export default async function Page() {
  // const queryClient = getQueryClient()
  const blogs = await getBlogs()

  // void queryClient.prefetchQuery(blogsOptions)
  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <PageClient blogs={blogs} />
    // </HydrationBoundary>
  )
}
