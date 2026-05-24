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

import { useCreateListingType } from "@/lib/hooks/tanstack/mutations/listingTypes";
import {
  addListingTypeSchema,
  ListingTypeFormValues,
} from "@/lib/validators/listingTypeValidator";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Spinner from "@/components/Spinner";

const AddTypeForm = () => {
  const { mutate, isPending, isSuccess, error } = useCreateListingType();
  const form = useForm<ListingTypeFormValues>({
    resolver: zodResolver(addListingTypeSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: ListingTypeFormValues) => {
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Added new listing type");
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Listing Type</FormLabel>
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
          {error && <span className="error">{error.message} </span>}
          <Button
            type="submit"
            size={"lg"}
            disabled={isPending}
            className="bg-gray-900 text-white w-full mt-8 text-base font-medium"
          >
            {isPending ? <Spinner /> : "Add Listing"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddTypeForm;
