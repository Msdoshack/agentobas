import { TokenReq } from "@/types/auth";
import { apiClient } from "./client";
import { AllUserResponse, SingleUserResponse } from "@/types/api";
import { API_PREFIX } from "@/constants";
import { apiServer } from "./server";

export const usersApi = {
  getAll: async (cookie: string): Promise<AllUserResponse> => {
    return apiServer.get<AllUserResponse>(API_PREFIX + "/users", cookie);
  },

  get: async ({
    id,
    cookieHeader,
  }: {
    id: string;
    cookieHeader: string;
  }): Promise<SingleUserResponse> => {
    return apiServer.get<SingleUserResponse>(
      API_PREFIX + "/users/" + id,
      cookieHeader,
    );
  },

  activate: async (token: TokenReq): Promise<SingleUserResponse> => {
    return apiClient.put<SingleUserResponse>(
      API_PREFIX + "/users/activate",
      token,
    );
  },

  delete: async (id: string): Promise<{ message: string }> => {
    return apiClient.delete<{ message: string }>(API_PREFIX + "/users/" + id);
  },
};
