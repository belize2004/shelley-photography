import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import PageClient from "../family-portrait/page.client";
import { getQueryClient } from "../get-query-client";
import { wall } from "@/lib/api/categories";

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(wall);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageClient />{" "}
    </HydrationBoundary>
  );
}
