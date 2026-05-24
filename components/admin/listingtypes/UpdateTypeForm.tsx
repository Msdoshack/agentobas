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
  addCategorySchema,
  CategoryFormValues,
} from "@/lib/validators/categoryValidator";
import { ListingType } from "@/types/listingType";
import { useUpdateListingType } from "@/lib/hooks/tanstack/mutations/listingTypes";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";
import { URLS } from "@/constants/enum";

type PropsType = {
  listingType: ListingType;
};
const UpdateTypeForm = ({ listingType }: PropsType) => {
  const { mutate, isPending, isSuccess, error } = useUpdateListingType();
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      name: listingType.name,
    },
  });

  const router = useRouter();

  const onSubmit = async (values: CategoryFormValues) => {
    mutate({ name: values.name, id: listingType.id });
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Listing-Type</FormLabel>
                <FormControl>
                  <Input
                    className="text-base"
                    placeholder="E.g. lease, rent, sale e.t.c"
                    {...field}
                  />
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

export default UpdateTypeForm;
