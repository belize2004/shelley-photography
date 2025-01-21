import PageClient from "../page.client";
import { getQueryClient } from "../get-query-client";
import { blogsOptions } from "@/lib/api/blog";

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(blogsOptions);
  return <PageClient />;
}
