import { AllPermissionsResponse, SinglePermissionResponse } from "@/types/api";
import { apiServer } from "./server";
import { API_PREFIX } from "@/constants";
import { apiClient } from "./client";
import { AddPermission, Permission } from "@/types/permission";

export const permissionsApi = {
  getAll: (cookieHeader: string): Promise<AllPermissionsResponse> => {
    return apiServer.get(API_PREFIX + "/permissions", cookieHeader);
  },
  getAllClient: (): Promise<AllPermissionsResponse> => {
    return apiClient.get(API_PREFIX + "/permissions");
  },

  get: (values: {
    cookieHeader: string;
    id: string;
  }): Promise<SinglePermissionResponse> => {
    return apiServer.get(
      API_PREFIX + "/permissions/" + values.id,
      values.cookieHeader,
    );
  },

  getForUser: (userId: string): Promise<{ data: string[] }> => {
    return apiClient.get(API_PREFIX + `/users/${userId}/permissions`);
  },

  add: (values: AddPermission) => {
    return apiClient.post(API_PREFIX + "/permissions", values);
  },

  update: (values: Permission) => {
    return apiClient.patch(API_PREFIX + "/permissions/" + values.id, {
      code: values.code,
    });
  },

  updateForUser: (values: { permission: AddPermission; userId: string }) => {
    return apiClient.patch(API_PREFIX + `/users/${values.userId}/permissions`, {
      code: values.permission.code,
    });
  },

  delete: (permissionId: string) => {
    return apiClient.delete(API_PREFIX + "/permissions/" + permissionId);
  },

  deleteForUser: ({
    userId,
    permissionId,
  }: {
    userId: string;
    permissionId: string;
  }) => {
    return apiClient.delete(
      API_PREFIX + `/users/${userId}/permissions/${permissionId}`,
    );
  },
};
