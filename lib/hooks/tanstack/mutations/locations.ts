import { useMutation } from "@tanstack/react-query";
import { locationsApi } from "../../../api/locations";
import { CategoryReq } from "@/types/Category";

// export function useGetAllLocation() {
//   return useQuery({
//     queryKey: ["all-locations"],
//     queryFn: () => locationsApi.getAll(),
//   });
// }

// export function useGetSingleLocation(id: string) {
//   return useQuery({
//     queryKey: ["category", { id }],
//     queryFn: () => locationsApi.get(id),
//     enabled: !!id,
//   });
// }

export function useCreateLocation() {
  return useMutation({
    mutationFn: (values: CategoryReq) => locationsApi.add(values),
  });
}

export function useUpdateLocation() {
  return useMutation({
    mutationFn: (values: { id: string; name: string }) =>
      locationsApi.update(values),
  });
}

export function useDeleteLocation() {
  return useMutation({
    mutationFn: (id: string) => locationsApi.delete(id),
  });
}
