import { AllPropertyResponse, SinglePropertyResponse } from "@/types/api";
import { AddProperty, UpdateProperty } from "@/types/property";
import { apiClient } from "./client";

export const propertiesApi = {
  getAll: async (query?: {
    type?: string;
    category?: string;
    search?: string;
    location?: string;
    page?: string;
    sort?: string;
    limit?: string;
  }): Promise<AllPropertyResponse> => {
    const searchParams = new URLSearchParams();

    if (query?.category) {
      searchParams.set("category", query.category);
    }
    if (query?.type) {
      searchParams.set("listingType", query.type);
    }
    if (query?.location) {
      searchParams.set("location", query.location);
    }
    if (query?.search) {
      searchParams.set("search", query.search);
    }
    if (query?.page) {
      searchParams.set("page", query.page);
    }

    if (query?.limit) {
      searchParams.set("limit", query.limit);
    }

    if (query?.sort) {
      searchParams.set("sort", query.sort);
    }

    const queryString = searchParams.toString();

    return apiClient.get(
      "/properties" + (queryString ? `?${queryString}` : ""),
    );
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
