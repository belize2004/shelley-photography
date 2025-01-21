import PageClient from "./page.client";
import { homeOptions } from "@/lib/api/home";
import { getQueryClient } from "./get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(homeOptions);

  return (
    <div className="p-4">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PageClient />
      </HydrationBoundary>
    </div>
  );
}
