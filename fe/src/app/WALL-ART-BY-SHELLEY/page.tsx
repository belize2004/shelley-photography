import PageClient from "../family-portrait/page.client";
import { getQueryClient } from "../get-query-client";
import { categoryOptions } from "@/lib/api/categories";

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(categoryOptions("wall art by shelley"));
  return (
    <>
      <PageClient />
    </>
  );
}
