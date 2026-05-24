"use client";
import { Suspense, useEffect } from "react";
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

import {
  ActivateUserFormValues,
  activateUserSchema,
} from "@/lib/validators/authValidator";
import toast from "react-hot-toast";

import Spinner from "../Spinner";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useActivateUser } from "@/lib/hooks/tanstack/mutations/users";
import Lottie from "lottie-react";
import Link from "next/link";
import successAnimation from "@/public/ok.json";

type PropsType = {
  email: string;
};

// 1. Move everything to an inner implementation component
const ActivateUserFormInner = ({ email }: PropsType) => {
  const { mutate, isPending, isSuccess, error } = useActivateUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const isActivated = searchParams.get("activated") === "true";

  // FIX #1: Safely cast to string
  const params = new URLSearchParams(searchParams.toString());

  const form = useForm<ActivateUserFormValues>({
    resolver: zodResolver(activateUserSchema),
    defaultValues: {
      token: "",
    },
  });

  const onSubmit = async (values: ActivateUserFormValues) => {
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess && !error) {
      params.set("activated", "true");
      router.push(`${pathname}?${params.toString()}`);
      toast.success("Success");
      form.reset();
    }
  }, [isSuccess, error]);

  return (
    <div>
      {!isActivated ? (
        <div>
          <h1 className="text-xs text-red-600 my-5">
            Pls enter the token sent to your email ({email})
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full"
            >
              <FormField
                control={form.control}
                name="token"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Token</FormLabel>
                    <FormControl>
                      <Input
                        className="text-base"
                        placeholder="token"
                        {...field}
                      />
                    </FormControl>
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
                {isPending ? <Spinner /> : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      ) : (
        <div className="modal flex flex-col items-center justify-center my-2">
          <Lottie
            animationData={successAnimation}
            loop={false}
            autoplay
            style={{ width: 100, height: 100 }}
          />
          <h2 className="font-semibold">Account activated!</h2>

          <Link
            href={"/login"}
            className="bg-gray-100 px-3 py-1.5 my-4 rounded-sm text-sm font-medium hover:bg-gray-200 transition"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

// 2. Export Wrapper protected by a Suspense boundary
const ActivateUserForm = (props: PropsType) => {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-md space-y-4 animate-pulse p-4">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
          <div className="h-10 bg-gray-100 rounded w-full" />
          <div className="h-12 bg-gray-900 rounded w-full" />
        </div>
      }
    >
      <ActivateUserFormInner {...props} />
    </Suspense>
  );
};

export default ActivateUserForm;
