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

import {
  addPermissionSchema,
  PermissionFormValues,
} from "@/lib/validators/permissionValidator";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useCreatePermission } from "@/lib/hooks/tanstack/mutations/permissions";
import Spinner from "@/components/Spinner";

const AddPermissionForm = () => {
  const { mutate, isPending, isSuccess, error } = useCreatePermission();
  const form = useForm<PermissionFormValues>({
    resolver: zodResolver(addPermissionSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (values: PermissionFormValues) => {
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Added new permission");
      form.reset();

      return;
    }
  }, [isSuccess]);

  return (
    <div className="px-5 my-32">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full"
        >
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Permission Code</FormLabel>
                <FormControl>
                  <Input
                    className="text-base"
                    placeholder="e.g user, admin, super admin"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <span className="error">{error.message} </span>}
          <Button
            type="submit"
            size={"lg"}
            disabled={isPending}
            className="bg-gray-900 text-white w-full mt-8 text-base font-medium"
          >
            {isPending ? <Spinner /> : "Add Permission"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddPermissionForm;
