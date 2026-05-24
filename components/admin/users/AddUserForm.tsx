"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useEffect, useState, Suspense } from "react";
import Spinner from "@/components/Spinner";

import { SignUpFormValues, signUpSchema } from "@/lib/validators/authValidator";
import { useRegister } from "@/lib/hooks/tanstack/mutations/auth";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import ActivateUserForm from "@/components/auth/ActivateUserForm";

// 1. Core Logic Component
function AddUserFormInner() {
  const { mutate, data, error, isPending, isSuccess, isError } = useRegister();

  // Track registered email locally so page refreshes on the activation card don't crash
  const [registeredEmail, setRegisteredEmail] = useState<string>("");

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // FIX #1: Safely cast to string
  const params = new URLSearchParams(searchParams.toString());

  const isRegSuccess = searchParams.get("reg_success") === "true";
  const activeEmail = registeredEmail || searchParams.get("email") || "";

  const onSubmit = (values: SignUpFormValues) => {
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess && !isError && data?.data?.email) {
      const email = data.data.email;
      setRegisteredEmail(email);

      params.set("reg_success", "true");
      params.set("email", email);

      router.push(`${pathname}?${params.toString()}`);
      form.reset();
    }
  }, [isSuccess, isError, data]);

  return !isRegSuccess ? (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-4 border rounded-lg mt-16 bg-white shadow-xs"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g liuz diaz" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="e.g abc@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Re-type Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && (
          <span className="text-xs text-red-600 block capitalize">
            {error.message}
          </span>
        )}

        <Button
          size={"lg"}
          className="w-full bg-gray-900 text-white text-base font-medium cursor-pointer"
          disabled={isPending}
          type="submit"
        >
          {isPending ? <Spinner /> : "Add User"}
        </Button>
      </form>
    </Form>
  ) : (
    // FIX #2: Rely on the verified URL/State fallback email instead of raw data node
    <ActivateUserForm email={activeEmail} />
  );
}

// 2. Main Safe Export with Suspense Protection
export default function AddUserForm() {
  return (
    <Suspense
      fallback={
        <div className="space-y-6 p-4 border rounded-lg mt-16 max-w-md mx-auto animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4" />
          <div className="h-10 bg-gray-100 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-1/4" />
          <div className="h-10 bg-gray-100 rounded w-full" />
          <div className="h-12 bg-gray-900 rounded w-full mt-6" />
        </div>
      }
    >
      <AddUserFormInner />
    </Suspense>
  );
}
