import { Root } from "../types";
import { axiosInstance } from "./instance";

export async function getBlog(id: string) {
  const response = await axiosInstance.get<{
    data: Root["data"][0]["blogs"][0];
  }>(`/blogs/${id}?populate=*`);
  return response.data;
}

import { queryOptions } from "@tanstack/react-query";

export const blogsOptions = queryOptions({
  queryKey: ["blogs"],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(`/blogs?populate=*`);

    return response.data;
  },
});
