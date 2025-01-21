import { micro } from "@/lib/api/categories";
import PageClient from "./page.client";
import { getQueryClient } from "../get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(micro);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageClient />{" "}
    </HydrationBoundary>
  );
}
