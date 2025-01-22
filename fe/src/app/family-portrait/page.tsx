import { family } from "@/lib/api/categories";

import PageClient from "./page.client";
import { getQueryClient } from "../get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portrait Photographer Pensacola Florida",
  description:
    "Capture timeless moments with professional portrait photography by Shelley Bressman in Pensacola, Florida. Serving Pensacola Beach, Perdido Key, Orange Beach, Gulf Shores, and Fort Morgan, Alabama, Shelley creates stunning, personalized portraits for every occasion",
};

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(family);

  return (
    <div className="pt-8 px-4">
      <h1 className="text-4xl font-bold w-fit mx-auto text-center">
        Family Portrait Photography <br /> Let us tell your story
      </h1>
      <p className="text-xl text-center my-4">
        Pensacola, Perdido Key, Orange Beach, Gulf Shores, Fort Morgan and
        Navarre Includes 2 photographers
      </p>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PageClient />
      </HydrationBoundary>
    </div>
  );
}
