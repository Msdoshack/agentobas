import { AllPermissionsResponse, SinglePermissionResponse } from "@/types/api";
import { apiServer } from "./server";
import { apiClient } from "./client";
import { AddPermission, Permission } from "@/types/permission";

export const permissionsApi = {
  getAll: (cookieHeader: string): Promise<AllPermissionsResponse> => {
    return apiServer.get("/permissions", cookieHeader);
  },
  getAllClient: (): Promise<AllPermissionsResponse> => {
    return apiClient.get("/permissions");
  },

  get: (values: {
    cookieHeader: string;
    id: string;
  }): Promise<SinglePermissionResponse> => {
    return apiServer.get("/permissions/" + values.id, values.cookieHeader);
  },

  getForUser: (userId: string): Promise<{ data: string[] }> => {
    return apiClient.get(`/users/${userId}/permissions`);
  },

  add: (values: AddPermission) => {
    return apiClient.post("/permissions", values);
  },

  update: (values: Permission) => {
    return apiClient.patch("/permissions/" + values.id, {
      code: values.code,
    });
  },

  updateForUser: (values: { permission: AddPermission; userId: string }) => {
    return apiClient.patch(`/users/${values.userId}/permissions`, {
      code: values.permission.code,
    });
  },

  delete: (permissionId: string) => {
    return apiClient.delete("/permissions/" + permissionId);
  },

  deleteForUser: ({
    userId,
    permissionId,
  }: {
    userId: string;
    permissionId: string;
  }) => {
    return apiClient.delete(`/users/${userId}/permissions/${permissionId}`);
  },
};
