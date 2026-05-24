import { authApi } from "@/lib/api/auth";
import { LoginRequest, RegisterRequest } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: ({ email, password }: LoginRequest) =>
      authApi.login({ email, password }),
  });
}
export function useRegister() {
  return useMutation({
    mutationFn: ({ name, email, password }: RegisterRequest) =>
      authApi.register({ email, name, password }),
  });
}

export function useSignout() {
  return useMutation({
    mutationFn: () => authApi.logout(),
  });
}
