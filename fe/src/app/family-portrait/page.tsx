import { family } from "@/lib/api/categories";

import PageClient from "./page.client";
import { getQueryClient } from "../get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

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
