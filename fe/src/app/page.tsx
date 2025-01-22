import { headers } from "next/headers";
import PageClient from "./page.client";
import { homeOptions } from "@/lib/api/home";
import { getQueryClient } from "./get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Shelley Bressman Photography | Pensacola and Gulf Shores Photographer",
  description:
    "Discover Shelley Bressman’s professional photography in Pensacola, FL, specializing in real estate, interior design, portraits, and concert events with artistic flair.",
};

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(homeOptions);

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
