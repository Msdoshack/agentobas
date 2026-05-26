import { AllCategoryResponse, SingleCategoryResponse } from "@/types/api";
import { CategoryReq } from "@/types/Category";
import { apiClient } from "./client";

export const categoriesApi = {
  getAll: async (): Promise<AllCategoryResponse> => {
    return apiClient.get<AllCategoryResponse>("/categories");
  },

  get: async (id: string): Promise<SingleCategoryResponse> => {
    return apiClient.get<SingleCategoryResponse>("/categories/" + id);
  },

  add: async (values: CategoryReq): Promise<SingleCategoryResponse> => {
    return apiClient.post("/categories", values);
  },

  update: async ({
    id,
    name,
  }: {
    id: string;
    name: string;
  }): Promise<SingleCategoryResponse> => {
    return apiClient.patch<SingleCategoryResponse>("/categories/" + id, {
      name,
    });
  },

  delete: async (id: string): Promise<{ message: string }> => {
    return apiClient.delete<{ message: string }>("/categories/" + id);
  },
};
