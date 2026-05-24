import { permissionsApi } from "@/lib/api/permissions";

import { useQuery } from "@tanstack/react-query";

export const useGetUserPermissions = (userId: string) => {
  return useQuery({
    queryKey: ["user-permissions", { userId }],
    queryFn: () => permissionsApi.getForUser(userId),
  });
};
