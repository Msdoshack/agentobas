import { permissionsApi } from "@/lib/api/permissions";
import { useQuery } from "@tanstack/react-query";

export const useGetAllPermissions = () => {
  return useQuery({
    queryKey: ["all-permissions"],
    queryFn: () => permissionsApi.getAllClient(),
  });
};
