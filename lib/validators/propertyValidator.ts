import { z } from "zod";

// Product-level
export const addPropertySchema = z.object({
  name: z.string().min(1, "Name is required"),

  description: z.string().optional(),

  categoryId: z.string().min(1, "Please select a category"),

  typeId: z.string().min(1, "Please select a brand"),

  imgs: z
    .array(z.string().url("Must be a valid URL"))
    .min(1, "At least two images is required"),

  price: z.string(),
  beds: z.int(),
  baths: z.int(),
  sqft: z.int(),
});

export const updatePropertySchema = z.object({
  name: z.string().min(1, "Name is required"),

  description: z.string().optional(),

  categoryId: z.string().min(1, "Please select a category"),

  typeId: z.string().min(1, "Please select a brand"),

  imgs: z
    .array(z.string().url("Must be a valid URL"))
    .min(1, "At least two images is required"),

  price: z.string(),
  beds: z.int(),
  baths: z.int(),
  sqft: z.int(),

  isAvailable: z.boolean(),
});

// Types
export type PropertyFormValues = z.infer<typeof addPropertySchema>;

export type UpdatePropertyFormValues = z.infer<typeof updatePropertySchema>;
