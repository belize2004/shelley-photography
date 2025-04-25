import {getShortTermRental, sh} from '@/lib/api/categories'

import PageClient from './page.client'
// import {getQueryClient} from '../../get-query-client'
// import {HydrationBoundary, dehydrate} from '@tanstack/react-query'
import {Metadata} from 'next'
import {headers} from 'next/headers'

export const metadata: Metadata = {
  title: 'Professional Short Term rental Airbnb VRBO Photography by Shelley Bressman',
  description:
    'Enhance your short-term rental or Airbnb listing with professional photography by Shelley Bressman in Pensacola, Florida. Specializing in high-quality images that showcase your property’s unique features, Shelley helps attract more guests and bookings.',
  openGraph: {
    type: 'website',
    images: ['https://i.ibb.co/ZMhtx2s/sh-og.png']
  }
}

export default async function Page() {
  // const queryClient = getQueryClient()
  const shortTermRental = await getShortTermRental()

  // void queryClient.prefetchQuery(sh)
  const headersList = headers()
  const userAgent = (await headersList).get('user-agent') || ''
  const isMobile = /mobile/i.test(userAgent)

  return (
    <div className="p-4">
      {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
      <PageClient isMobile={isMobile} shortTermRental={shortTermRental} />
      {/* </HydrationBoundary> */}
    </div>
  )
}
