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
import { Permission } from "@/types/permission";
import { useUpdateListingType } from "@/lib/hooks/tanstack/mutations/listingTypes";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";
import { URLS } from "@/constants/enum";
import {
  addPermissionSchema,
  PermissionFormValues,
} from "@/lib/validators/permissionValidator";

type PropsType = {
  permission: Permission;
};
const UpdatePermissionForm = ({ permission }: PropsType) => {
  const { mutate, isPending, isSuccess, error } = useUpdateListingType();
  const form = useForm<PermissionFormValues>({
    resolver: zodResolver(addPermissionSchema),
    defaultValues: {
      code: permission.code,
    },
  });

  const router = useRouter();

  const onSubmit = async (values: PermissionFormValues) => {
    mutate({ name: values.code, id: permission.id.toString() });
  };

  useEffect(() => {
    if (isSuccess && !error) {
      toast.success("Updated");

      form.reset();

      router.push(URLS.allTypePage);

      return;
    }
  }, [isSuccess, error]);

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
                  <Input className="text-base" placeholder="code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && <span className="error">{error.message}</span>}

          <Button
            type="submit"
            size={"lg"}
            disabled={isPending}
            className="bg-gray-900 text-white w-full mt-8 text-base font-medium"
          >
            {isPending ? <Spinner /> : "Update"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdatePermissionForm;
