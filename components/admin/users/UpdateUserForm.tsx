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
import toast from "react-hot-toast";

import { useEffect } from "react";
import Spinner from "@/components/Spinner";

import {
  UpdateUserForm,
  updateUserSchema,
} from "@/lib/validators/userValidator";
import { User } from "@/types/user";

type PropsType = {
  user: User;
};
export default function UpdateUserFormComp({ user }: PropsType) {
  const isPending = false;
  const isSuccess = false;
  const isError = false;
  const form = useForm<UpdateUserForm>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: user.name,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: UpdateUserForm) => {
    // mutate({ ...values, description: longDesc });
  };

  useEffect(() => {
    if (isSuccess && !isError) {
      toast.success("updated");

      form.reset();
    }
  }, [isSuccess]);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          console.error("Validation errors:", errors);
        })}
        className="space-y-6 p-4 border rounded-lg mt-16"
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="e.g abc@mail.com"
                  {...field}
                />
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
              <FormLabel>confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          size={"lg"}
          className="w-full bg-gray-900 text-base font-medium"
          disabled={isPending}
          type="submit"
        >
          {isPending ? <Spinner /> : "Add Property"}
        </Button>
      </form>
    </Form>
  );
}
