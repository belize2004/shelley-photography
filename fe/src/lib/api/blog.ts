import { Root } from "../types";
import { axiosInstance } from "./instance";

export async function getBlogPosts() {
  const response = await axiosInstance.get<{
    data: Root["data"][0]["blogs"][0][];
  }>(`/blogs?populate=*`);
  return response.data;
}

export async function getBlog(id: string) {
  const response = await axiosInstance.get<{
    data: Root["data"][0]["blogs"][0];
  }>(`/blogs/${id}?populate=*`);
  return response.data;
}
