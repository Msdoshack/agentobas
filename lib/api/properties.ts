import { AllPropertyResponse, SinglePropertyResponse } from "@/types/api";
import { apiServer } from "./server";
import { API_PREFIX } from "@/constants";
import { AddProperty, UpdateProperty } from "@/types/property";
import { apiClient } from "./client";

export const propertiesApi = {
  getAll: async (): Promise<AllPropertyResponse> => {
    return apiClient.get(API_PREFIX + "/properties");
  },

  get: async (propertyId: string): Promise<SinglePropertyResponse> => {
    return apiClient.get(API_PREFIX + "/properties/" + propertyId);
  },

  add: async (values: AddProperty): Promise<SinglePropertyResponse> => {
    return apiClient.post(API_PREFIX + "/properties", values);
  },

  update: async (values: {
    data: UpdateProperty;
    id: string;
  }): Promise<SinglePropertyResponse> => {
    return apiClient.patch(
      API_PREFIX + "/properties/" + values.id,
      values.data,
    );
  },

  delete: async (id: string): Promise<{ message: string }> => {
    return apiClient.delete(API_PREFIX + "/properties/" + id);
  },
};
