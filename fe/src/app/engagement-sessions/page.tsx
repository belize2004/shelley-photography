import { categoryOptions } from "@/lib/api/categories";
import PageClient from "./page.client";
import { getQueryClient } from "../get-query-client";

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(categoryOptions("engagement sessions"));

  return (
    <>
      <PageClient />
    </>
  );
}
