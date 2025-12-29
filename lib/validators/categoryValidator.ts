import { z } from "zod";

export const addCategorySchema = z.object({
  name: z.string().min(1, "Category cannot be empty"),
});

export const updateCategorySchema = z.object({
  name: z.string().min(1, "Category cannot be empty"),
});

export type CategoryFormValues = z.infer<typeof addCategorySchema>;
export type UpdateCategoryFormValues = z.infer<typeof updateCategorySchema>;
