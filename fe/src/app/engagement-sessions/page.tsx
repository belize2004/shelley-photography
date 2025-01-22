import { engage } from "@/lib/api/categories";
import PageClient from "./page.client";
import { getQueryClient } from "../get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engagement Sessions Pensacola | Shelley Bressman Photography",
  description:
    "Engagement sessions in Pensacola by Shelley Bressman Photography beautifully capture your love story with professional, romantic, and timeless photography.",
};

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(engage);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageClient />
    </HydrationBoundary>
  );
}
