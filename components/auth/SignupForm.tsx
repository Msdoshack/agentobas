"use client";
import { Suspense, useEffect, useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegister } from "@/lib/hooks/tanstack/mutations/auth";
import { SignUpFormValues, signUpSchema } from "@/lib/validators/authValidator";
import toast from "react-hot-toast";
import Spinner from "../Spinner";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ShowPassword from "./ShowPassword";
import ActivateUserForm from "./ActivateUserForm";
import Link from "next/link";
import { URLS } from "@/constants/enum";

// 1. Core Signup Form Logic Component
const SignupFormInner = () => {
  const { mutate, data, isPending, isSuccess, error } = useRegister();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Keep track of the successfully registered email locally so page refreshes don't break it
  const [registeredEmail, setRegisteredEmail] = useState<string>("");

  // FIX #1: Safely cast to string
  const params = new URLSearchParams(searchParams.toString());
  const isSuccessful = searchParams.get("reg_success") === "true";

  // Fallback check: try reading the email from query params if page is refreshed
  const activeEmail = registeredEmail || searchParams.get("email") || "";

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignUpFormValues) => {
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess && !error && data?.data?.email) {
      const email = data.data.email;
      setRegisteredEmail(email);

      // Append success state and email to parameters so refresh-resilient
      params.set("reg_success", "true");
      params.set("email", email);

      router.push(`${pathname}?${params.toString()}`);
      toast.success("Successfully registered!");
      form.reset();
    }
  }, [isSuccess, error, data]);

  return (
    <div>
      {/* FIX #2: Check for activeEmail instead of relying purely on transient mutation state */}
      {isSuccessful && activeEmail ? (
        <ActivateUserForm email={activeEmail} />
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="text-base"
                      placeholder="Enter your name"
                      {...field}
                    />
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
                  <FormLabel className="text-base">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-base"
                      placeholder="e.g abcd@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="text-base">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="text-base"
                      placeholder="********"
                      {...field}
                    />
                  </FormControl>
                  <ShowPassword />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="text-base">Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="text-base"
                      placeholder="********"
                      {...field}
                    />
                  </FormControl>
                  <ShowPassword />
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && (
              <span className="text-xs text-red-600 capitalize block">
                {error.message}
              </span>
            )}

            <Button
              type="submit"
              size={"lg"}
              disabled={isPending}
              className="bg-gray-900 text-white w-full mt-8 text-base font-medium cursor-pointer"
            >
              {isPending ? <Spinner /> : "Sign Up"}
            </Button>

            <p className="text-sm mt-4 text-center">
              Already have an account?{" "}
              <Link
                href={URLS.loginPage}
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </Form>
      )}
    </div>
  );
};

// 2. Export Wrapper protected by a Suspense boundary
const SignupForm = () => {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-md space-y-6 animate-pulse p-4 mx-auto">
          <div className="h-10 bg-gray-200 rounded-md w-1/4" />
          <div className="h-12 bg-gray-100 rounded-md w-full" />
          <div className="h-10 bg-gray-200 rounded-md w-1/4" />
          <div className="h-12 bg-gray-100 rounded-md w-full" />
        </div>
      }
    >
      <SignupFormInner />
    </Suspense>
  );
};

export default SignupForm;
