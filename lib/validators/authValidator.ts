import { z } from "zod";

export const loginSchema = z.object({
  email: z.email().min(1, "Pls provide registered email"),

  password: z.string().min(1, "Pls enter your password"),
});

export const signUpSchema = z
  .object({
    name: z.string().min(1, "Your name is required"),

    email: z.email().min(1, "Your email is required"),

    password: z.string().min(1, "Your password is required"),

    confirmPassword: z.string().min(1, "Pls re-type your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const activateUserSchema = z.object({
  token: z.string().min(1, "Enter token"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export type ActivateUserFormValues = z.infer<typeof activateUserSchema>;

export type SignUpFormValues = z.infer<typeof signUpSchema>;
