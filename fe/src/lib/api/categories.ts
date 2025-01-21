import { Root } from "../types";
import { axiosInstance } from "./instance";
import { queryOptions } from "@tanstack/react-query";

export const categoryOptions = (name: string) =>
  queryOptions({
    queryKey: ["category", name],
    queryFn: async () => {
      const response = await axiosInstance.get<Root>(
        `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=${name}`
      );

      return response.data;
    },
  });
