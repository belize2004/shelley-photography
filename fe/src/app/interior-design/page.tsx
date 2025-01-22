import { inte } from "@/lib/api/categories";
import PageClient from "./page.client";
import { getQueryClient } from "../get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design photography Pensacola Florida by Shelley Bressman",
  description:
    "Professional interior design photography in Pensacola, Florida by Shelley Bressman, showcasing elegant and detailed images that highlight the beauty and uniqueness of each space.",
};

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(inte);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageClient />
    </HydrationBoundary>
  );
}
