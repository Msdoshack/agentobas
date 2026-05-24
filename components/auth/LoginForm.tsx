"use client";
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
import { useLogin } from "@/lib/hooks/tanstack/mutations/auth";
import { LoginFormValues, loginSchema } from "@/lib/validators/authValidator";
import { useEffect } from "react";
import toast from "react-hot-toast";
// import { AuthProvider, useAuth } from "@/lib/context/authContext";
import Spinner from "../Spinner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { URLS } from "@/constants/enum";

const LoginForm = () => {
  const { mutate, isPending, isSuccess, error } = useLogin();

  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess && !error) {
      toast.success("successfull");
      router.push("/properties");
      form.reset();

      return;
    }
  }, [isSuccess, error]);

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Email</FormLabel>
                <FormControl>
                  <Input className="text-base" placeholder="" {...field} />
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
                <FormLabel className="text-base">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="text-base"
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && (
            <span className="text-xs text-red-600 capitalize">
              {error.message}
            </span>
          )}

          <Button
            type="submit"
            size={"lg"}
            disabled={isPending}
            className="bg-gray-900 text-white w-full mt-8 text-base font-medium"
          >
            {isPending ? <Spinner /> : "Login"}
          </Button>

          <p>
            Don't have an account?{" "}
            <Link href={URLS.signUp} className="text-blue-600 font-medium">
              Sign Up
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
