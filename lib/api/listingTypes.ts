import {
  AllListingTypesResponse,
  SingleListingTypeResponse,
} from "@/types/api";
import { apiClient } from "./client";
import { API_PREFIX } from "@/constants";
import { ListingTypeReq, UpdateListingTypeReq } from "@/types/listingType";

export const listingTypesApi = {
  getAll: async (): Promise<AllListingTypesResponse> => {
    return apiClient.get<AllListingTypesResponse>(
      API_PREFIX + "/listing-types",
    );
  },

  get: async (id: string): Promise<SingleListingTypeResponse> => {
    return apiClient.get<SingleListingTypeResponse>(
      API_PREFIX + "/listing-types/" + id,
    );
  },

  add: async (values: ListingTypeReq): Promise<SingleListingTypeResponse> => {
    return apiClient.post(API_PREFIX + "/listing-types", values);
  },

  update: async ({
    id,
    name,
  }: UpdateListingTypeReq): Promise<SingleListingTypeResponse> => {
    return apiClient.patch<SingleListingTypeResponse>(
      API_PREFIX + "/listing-types/" + id,
      { name },
    );
  },

  delete: async (id: string): Promise<{ message: string }> => {
    return apiClient.delete<{ message: string }>(
      API_PREFIX + "/listing-types/" + id,
    );
  },
};
