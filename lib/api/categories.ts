import { AllCategoryResponse, SingleCategoryResponse } from "@/types/api";
import { CategoryReq } from "@/types/Category";
import { apiClient } from "./client";
import { API_PREFIX } from "@/constants";

export const categoriesApi = {
  getAll: async (): Promise<AllCategoryResponse> => {
    return apiClient.get<AllCategoryResponse>(API_PREFIX + "/categories");
  },

  get: async (id: string): Promise<SingleCategoryResponse> => {
    return apiClient.get<SingleCategoryResponse>(
      API_PREFIX + "/categories/" + id,
    );
  },

  add: async (values: CategoryReq): Promise<SingleCategoryResponse> => {
    return apiClient.post(API_PREFIX + "/categories", values);
  },

  update: async ({
    id,
    name,
  }: {
    id: string;
    name: string;
  }): Promise<SingleCategoryResponse> => {
    return apiClient.patch<SingleCategoryResponse>(
      API_PREFIX + "/categories/" + id,
      { name },
    );
  },

  delete: async (id: string): Promise<{ message: string }> => {
    return apiClient.delete<{ message: string }>(
      API_PREFIX + "/categories/" + id,
    );
  },
};
