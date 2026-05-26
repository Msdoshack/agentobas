import {
  AllListingTypesResponse,
  SingleListingTypeResponse,
} from "@/types/api";
import { apiClient } from "./client";
import { ListingTypeReq, UpdateListingTypeReq } from "@/types/listingType";

export const listingTypesApi = {
  getAll: async (): Promise<AllListingTypesResponse> => {
    return apiClient.get<AllListingTypesResponse>("/listing-types");
  },

  get: async (id: string): Promise<SingleListingTypeResponse> => {
    return apiClient.get<SingleListingTypeResponse>("/listing-types/" + id);
  },

  add: async (values: ListingTypeReq): Promise<SingleListingTypeResponse> => {
    return apiClient.post("/listing-types", values);
  },

  update: async ({
    id,
    name,
  }: UpdateListingTypeReq): Promise<SingleListingTypeResponse> => {
    return apiClient.patch<SingleListingTypeResponse>("/listing-types/" + id, {
      name,
    });
  },

  delete: async (id: string): Promise<{ message: string }> => {
    return apiClient.delete<{ message: string }>("/listing-types/" + id);
  },
};
