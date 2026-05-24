import { apiClient } from "./client";
import type { LoginRequest, RegisterRequest } from "@/types/auth";
import type { SingleUserResponse } from "@/types/api";

export const authApi = {
  login: async (credentials: LoginRequest): Promise<SingleUserResponse> => {
    return apiClient.post<SingleUserResponse>(
      "/api/v1/auth/login",
      credentials,
    );
  },

  register: async (data: RegisterRequest): Promise<SingleUserResponse> => {
    return apiClient.post<SingleUserResponse>("/api/v1/auth/register", data);
  },

  logout: async (): Promise<{ message: string }> => {
    return apiClient.post<{ message: string }>("/api/v1/auth/logout");
  },
};
