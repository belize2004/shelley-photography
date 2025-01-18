import { Root } from "../types";
import { axiosInstance } from "./instance";

export const getCategories = async () => {
  const response = await axiosInstance.get<Root>(
    `/categories?populate[data][populate][gallery][populate]=*&populate[data][populate][posts][populate]=*`
  );
  return response.data;
};
