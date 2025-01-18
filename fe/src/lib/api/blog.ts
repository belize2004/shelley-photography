import { Root } from "../types";
import { axiosInstance } from "./instance";

export async function getBlogPosts() {
  const response = await axiosInstance.get<Root>(
    `/categories?populate[data][populate][posts][populate]=*`
  );
  return response.data;
}
