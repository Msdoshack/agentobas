import { AllLocationResponse, SingleLocationResponse } from "@/types/api";
import { LocationReq, UpdateLocationReq } from "@/types/locations";
import { apiClient } from "./client";
import { API_PREFIX } from "@/constants";

export const locationsApi = {
  getAll: async (): Promise<AllLocationResponse> => {
    return apiClient.get<AllLocationResponse>(API_PREFIX + "/locations");
  },

  get: async (id: string): Promise<SingleLocationResponse> => {
    return apiClient.get<SingleLocationResponse>(
      API_PREFIX + "/locations/" + id,
    );
  },

  add: async (values: LocationReq): Promise<SingleLocationResponse> => {
    return apiClient.post(API_PREFIX + "/locations", values);
  },

  update: async ({
    id,
    name,
  }: UpdateLocationReq): Promise<SingleLocationResponse> => {
    return apiClient.patch<SingleLocationResponse>(
      API_PREFIX + "/locations/" + id,
      { name },
    );
  },

  delete: async (id: string): Promise<{ message: string }> => {
    return apiClient.delete<{ message: string }>(
      API_PREFIX + "/locations/" + id,
    );
  },
};
