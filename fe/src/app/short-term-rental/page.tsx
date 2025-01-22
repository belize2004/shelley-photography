import { sh } from "@/lib/api/categories";

import PageClient from "./page.client";
import { getQueryClient } from "../get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Short Term rental Airbnb VRBO Photography by Shelley Bressman",
  description:
    "Enhance your short-term rental or Airbnb listing with professional photography by Shelley Bressman in Pensacola, Florida. Specializing in high-quality images that showcase your property’s unique features, Shelley helps attract more guests and bookings.",
};

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(sh);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageClient />
    </HydrationBoundary>
  );
}
