import { sh } from "@/lib/api/categories";

import PageClient from "../family-portrait/page.client";
import { getQueryClient } from "../get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(sh);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageClient />{" "}
    </HydrationBoundary>
  );
}
