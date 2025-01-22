import { senior } from "@/lib/api/categories";

import PageClient from "./page.client";
import { getQueryClient } from "../get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Portrait Photography Pensacola | Shelley Bressman Photography",
  description:
    "Senior portrait photography in Pensacola by Shelley Bressman Photography captures your unique style and personality with professional, creative, and timeless images.",
};

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(senior);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageClient />
    </HydrationBoundary>
  );
}
