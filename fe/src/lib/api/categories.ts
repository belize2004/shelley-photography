import { Root } from "../types";
import { axiosInstance } from "./instance";

export const getPhotos = async () => {
  const response = await axiosInstance.get<Root>(
    `/categories?populate[photos][populate]=*&populate[blogs][populate]=*`
  );
  return response.data;
};
