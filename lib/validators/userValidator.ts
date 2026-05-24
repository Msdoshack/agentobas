import { z } from "zod";

// Product-level
export const updateUserSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    password: z.string().min(8, "password must be minimum of 8 charaters"),
    confirmPassword: z.string().min(1, "please retype your password"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

// Types
export type UpdateUserForm = z.infer<typeof updateUserSchema>;
