import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import PageClient from "./page.client";
import { getQueryClient } from "../get-query-client";
import { wall } from "@/lib/api/categories";
import { headers } from "next/headers";

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(wall);
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
