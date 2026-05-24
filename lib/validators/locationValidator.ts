import { z } from "zod";

export const addLocationSchema = z.object({
  name: z.string().min(1, "Location cannot be empty"),
});

export type LocationFormValues = z.infer<typeof addLocationSchema>;
