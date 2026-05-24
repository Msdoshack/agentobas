import { z } from "zod";

export const addPermissionSchema = z.object({
  code: z.string().min(1, "permission cannot be empty"),
});

export type PermissionFormValues = z.infer<typeof addPermissionSchema>;
