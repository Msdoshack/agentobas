import { permissionsApi } from "@/lib/api/permissions";
import { AddPermission, Permission } from "@/types/permission";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreatePermission = () => {
  return useMutation({
    mutationFn: (values: AddPermission) => permissionsApi.add(values),
  });
};

export const useUpdatePermission = () => {
  return useMutation({
    mutationFn: (values: Permission) => permissionsApi.update(values),
  });
};

export const useUpdateUserPermission = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: { permission: AddPermission; userId: string }) =>
      permissionsApi.updateForUser(values),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["user-permissions", { userId: variables.userId }],
      });
    },
  });
};

export const useDeletePermission = () => {
  return useMutation({
    mutationFn: (permissionId: string) => permissionsApi.delete(permissionId),
  });
};

export const useDeleteUserPermission = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: { permissionId: string; userId: string }) =>
      permissionsApi.deleteForUser(values),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["user-permissions", { userId: variables.userId }],
      });
    },
  });
};
