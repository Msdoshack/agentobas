import { z } from "zod";

export const addListingTypeSchema = z.object({
  name: z.string().min(1, "listing-type cannot be empty"),
});

export type ListingTypeFormValues = z.infer<typeof addListingTypeSchema>;
