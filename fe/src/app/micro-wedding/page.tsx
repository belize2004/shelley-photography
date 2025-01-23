import { micro } from "@/lib/api/categories";
import PageClient from "./page.client";
import { getQueryClient } from "../get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Micro Wedding Pensacola Florida",
  description:
    "Capture your intimate micro wedding in Pensacola, Florida with Shelley Bressman Photography, specializing in beautiful, heartfelt moments by the beach and beyond.",
};

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(micro);
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
