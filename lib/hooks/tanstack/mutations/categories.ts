import { useMutation, useQuery } from "@tanstack/react-query";
import { categoriesApi } from "../../../api/categories";
import { CategoryReq } from "@/types/Category";

export function useGetAllCategories() {
  return useQuery({
    queryKey: ["all-categories"],
    queryFn: () => categoriesApi.getAll(),
  });
}

export function useGetSingleCategory(id: string) {
  return useQuery({
    queryKey: ["category", { id }],
    queryFn: () => categoriesApi.get(id),
    enabled: !!id,
  });
}

export function useCreateCategory() {
  return useMutation({
    mutationFn: (values: CategoryReq) => categoriesApi.add(values),
  });
}

export function useUpdateCategory() {
  return useMutation({
    mutationFn: (values: { id: string; name: string }) =>
      categoriesApi.update(values),
  });
}

export function useDeleteCategory() {
  return useMutation({
    mutationFn: (id: string) => categoriesApi.delete(id),
  });
}
