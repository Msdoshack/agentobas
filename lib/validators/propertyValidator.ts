import { z } from "zod";

const imageSchema = z.object({
  url: z.url("Image URL is invalid"),
  publicId: z.string().min(1, "Public ID is required"),
  thumbnail: z.url("Thumbnail URL is invalid"),
});
const videoSchema = z.object({
  url: z.url("Image URL is invalid"),
  publicId: z.string().min(1, "Public ID is required"),
  thumbnail: z.url("Thumbnail URL is invalid"),
});

// Product-level
export const addPropertySchema = z.object({
  title: z.string().min(1, "Name is required"),
  price: z.string().regex(/^\d+$/, "price must be a number"),
  // description: z.string().optional(),
  categoryId: z.string().min(1, "Please select a category"),

  listingTypeId: z.string().min(1, "Please select listing type"),

  locationId: z.string().min(1, "Please select a location"),

  beds: z.string().optional(),

  baths: z.string().optional(),

  plots: z.string().optional(),

  images: z.array(imageSchema).min(1, "At least one image is required"),

  videos: z.array(videoSchema).optional(),
});

export const updatePropertySchema = z.object({
  title: z.string().min(1, "title is required"),

  price: z.string().regex(/^\d+$/, "Beds must be a number"),

  categoryId: z.string().min(1, "Please select a category"),

  listingTypeId: z.string().min(1, "Please select a brand"),

  locationId: z.string().min(1, "please choose a location"),

  beds: z.string().regex(/^\d+$/, "Beds must be a number").optional(),

  baths: z.string().regex(/^\d+$/, "Baths must be a number").optional(),

  plots: z.string().optional(),

  isAvailable: z.string(),
});

// Types
export type PropertyFormValues = z.infer<typeof addPropertySchema>;

export type UpdatePropertyFormValues = z.infer<typeof updatePropertySchema>;
