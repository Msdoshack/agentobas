import { usersApi } from "@/lib/api/users";
import { TokenReq } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";

export function useActivateUser() {
  return useMutation({
    mutationFn: (values: TokenReq) => usersApi.activate(values),
  });
}
export function useDeleteUser() {
  return useMutation({
    mutationFn: (id: string) => usersApi.delete(id),
  });
}
