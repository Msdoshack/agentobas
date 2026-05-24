import { listingTypesApi } from "@/lib/api/listingTypes";
import { ListingTypeReq, UpdateListingTypeReq } from "@/types/listingType";
import { useMutation } from "@tanstack/react-query";

export function useCreateListingType() {
  return useMutation({
    mutationFn: (values: ListingTypeReq) => listingTypesApi.add(values),
  });
}

export function useUpdateListingType() {
  return useMutation({
    mutationFn: (values: UpdateListingTypeReq) =>
      listingTypesApi.update(values),
  });
}

export function useDeleteListingType() {
  return useMutation({
    mutationFn: (id: string) => listingTypesApi.delete(id),
  });
}
