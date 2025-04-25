import {headers} from 'next/headers'
import {Suspense} from 'react'
import {Metadata} from 'next'
// import {getQueryClient} from '../get-query-client'
// import {dehydrate, HydrationBoundary} from '@tanstack/react-query'
import {getHomeData, home} from '@/lib/api/categories'
import {Gallery} from '@/components/gallery'
import {BlogList} from '@/components/blog/blog-list'
import {LoadingGallery} from '@/components/gallery.loading'

export const metadata: Metadata = {
  title: 'Shelley Bressman Photography | Pensacola and Gulf Shores Photographer',
  description:
    "Discover Shelley Bressman's professional photography in Pensacola, FL, specializing in real estate, interior design, portraits, and concert events with artistic flair.",
  metadataBase: new URL('https://shelleybressman.com')
}

export const revalidate = 3600

export default async function Home() {
  // const queryClient = getQueryClient()
  const homeData = await getHomeData()

  // await queryClient.prefetchQuery(home)

  const headersList = await headers()
  const userAgent = headersList.get('user-agent') || ''
  const isMobile = /mobile/i.test(userAgent)

  return (
    <div className="max-w-[2000px] mx-auto">
      {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
      <Suspense fallback={<LoadingGallery />}>
        <Gallery isMobile={isMobile} homeData={homeData} />
      </Suspense>
      <Suspense fallback={<div className="animate-pulse h-96" />}>
        <BlogList />
      </Suspense>
      {/* </HydrationBoundary> */}
    </div>
  )
}
