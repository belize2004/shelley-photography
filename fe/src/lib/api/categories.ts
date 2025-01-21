import { Root } from "../types";
import { axiosInstance } from "./instance";
import { queryOptions } from "@tanstack/react-query";

export const family = queryOptions({
  queryKey: ["family-portrait"],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=family portrait`
    );

    return response.data;
  },
});

export const inte = queryOptions({
  queryKey: ["interior-design"],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=interior design`
    );

    return response.data;
  },
});

export const reale = queryOptions({
  queryKey: ["real-estate"],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=real estate`
    );

    return response.data;
  },
});

export const sh = queryOptions({
  queryKey: ["short"],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=short term rental`
    );

    return response.data;
  },
});

export const engage = queryOptions({
  queryKey: ["engagement"],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=engagement sessions`
    );

    return response.data;
  },
});

export const senior = queryOptions({
  queryKey: ["senior-portrait"],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=senior portraits`
    );

    return response.data;
  },
});

export const micro = queryOptions({
  queryKey: ["micro"],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=micro wedding`
    );

    return response.data;
  },
});

export const wall = queryOptions({
  queryKey: ["wall"],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=wall-art-by-shelley`
    );

    return response.data;
  },
});
