import { AllPropertyResponse, SinglePropertyResponse } from "@/types/api";
import { apiServer } from "./server";
import { API_PREFIX } from "@/constants";
import { AddProperty, UpdateProperty } from "@/types/property";
import { apiClient } from "./client";

export const propertiesApi = {
  getAll: async (): Promise<AllPropertyResponse> => {
    return apiClient.get("/properties");
  },

  get: async (propertyId: string): Promise<SinglePropertyResponse> => {
    return apiClient.get("/properties/" + propertyId);
  },

  add: async (values: AddProperty): Promise<SinglePropertyResponse> => {
    return apiClient.post("/properties", values);
  },

  update: async (values: {
    data: UpdateProperty;
    id: string;
  }): Promise<SinglePropertyResponse> => {
    return apiClient.patch("/properties/" + values.id, values.data);
  },

  delete: async (id: string): Promise<{ message: string }> => {
    return apiClient.delete("/properties/" + id);
  },
};
