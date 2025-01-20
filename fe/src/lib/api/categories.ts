import { Root } from "../types";
import { axiosInstance } from "./instance";

export const getCategory = async (name: string) => {
  const response = await axiosInstance.get<Root>(
    `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=${name}`
  );
  return response.data;
};
