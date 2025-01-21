import { categoryOptions } from "@/lib/api/categories";

import PageClient from "../family-portrait/page.client";
import { getQueryClient } from "../get-query-client";

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(categoryOptions("senior portraits"));

  return (
    <>
      <PageClient />
    </>
  );
}
