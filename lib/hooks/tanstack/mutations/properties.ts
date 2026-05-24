import { propertiesApi } from "@/lib/api/properties";
import { AddProperty, UpdateProperty } from "@/types/property";
import { useMutation } from "@tanstack/react-query";

export function useCreateProperty() {
  return useMutation({
    mutationFn: (values: AddProperty) => propertiesApi.add(values),
  });
}

export function useUpdateProperty() {
  return useMutation({
    mutationFn: (values: { data: UpdateProperty; id: string }) =>
      propertiesApi.update(values),
  });
}

export function useDeleteProperty() {
  return useMutation({
    mutationFn: (id: string) => propertiesApi.delete(id),
  });
}
