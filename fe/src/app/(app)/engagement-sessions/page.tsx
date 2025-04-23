import {engage} from '@/lib/api/categories'
import PageClient from './page.client'
import {getQueryClient} from '../../get-query-client'
import {HydrationBoundary, dehydrate} from '@tanstack/react-query'
import {Metadata} from 'next'
import {headers} from 'next/headers'

export const metadata: Metadata = {
  title: 'Engagement Sessions Pensacola | Shelley Bressman Photography',
  description:
    'Engagement sessions in Pensacola by Shelley Bressman Photography beautifully capture your love story with professional, romantic, and timeless photography.',
  openGraph: {
    type: 'website',
    title: 'Engagement Sessions Pensacola | Shelley Bressman Photography',
    images: ['https://i.ibb.co/BTFs6zm/eng-og.jpg']
  }
}

export default async function Page() {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(engage)

  const headersList = headers()
  const userAgent = (await headersList).get('user-agent') || ''
  const isMobile = /mobile/i.test(userAgent)

  return (
    <div className="p-4">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PageClient isMobile={isMobile} />
      </HydrationBoundary>
    </div>
  )
}
