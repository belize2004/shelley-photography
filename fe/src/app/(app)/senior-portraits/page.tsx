import {senior} from '@/lib/api/categories'

import PageClient from './page.client'
import {getQueryClient} from '../../get-query-client'
import {dehydrate, HydrationBoundary} from '@tanstack/react-query'
import {Metadata} from 'next'
import {headers} from 'next/headers'

export const metadata: Metadata = {
  title: 'Senior Portrait Photography Pensacola | Shelley Bressman Photography',
  description:
    'Senior portrait photography in Pensacola by Shelley Bressman Photography captures your unique style and personality with professional, creative, and timeless images.',
  openGraph: {
    type: 'website',
    images: ['https://i.ibb.co/vCFHpPB/senior-og.jpg']
  }
}

export default async function Page() {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(senior)
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
