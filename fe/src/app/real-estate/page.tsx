import { reale } from "@/lib/api/categories";

import PageClient from "./page.client";
import { getQueryClient } from "../get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Real Estate photography in Pensacola Florida by Shelley Bressman",
  description:
    "Real Estate photography in Pensacola, Florida by Shelley Bressman, capturing stunning property images that highlight every unique detail and maximize visual appeal for listings.",
};

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(reale);
  const headersList = headers();
  const userAgent = (await headersList).get("user-agent") || "";
  const isMobile = /mobile/i.test(userAgent);

  return (
    <div className="p-4">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PageClient isMobile={isMobile} />
      </HydrationBoundary>
    </div>
  );
}
