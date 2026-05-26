import { TokenReq } from "@/types/auth";
import { apiClient } from "./client";
import { AllUserResponse, SingleUserResponse } from "@/types/api";
import { apiServer } from "./server";

export const usersApi = {
  getAll: async (cookie: string): Promise<AllUserResponse> => {
    return apiServer.get<AllUserResponse>("/users", cookie);
  },

  get: async ({
    id,
    cookieHeader,
  }: {
    id: string;
    cookieHeader: string;
  }): Promise<SingleUserResponse> => {
    return apiServer.get<SingleUserResponse>("/users/" + id, cookieHeader);
  },

  activate: async (token: TokenReq): Promise<SingleUserResponse> => {
    return apiClient.put<SingleUserResponse>("/users/activate", token);
  },

  delete: async (id: string): Promise<{ message: string }> => {
    return apiClient.delete<{ message: string }>("/users/" + id);
  },
};
