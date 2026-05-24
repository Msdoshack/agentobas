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
  addLocationSchema,
  LocationFormValues,
} from "@/lib/validators/locationValidator";
import { useCreateLocation } from "@/lib/hooks/tanstack/mutations/locations";
import toast from "react-hot-toast";
import { useEffect } from "react";
import Spinner from "@/components/Spinner";

const AddLocationForm = () => {
  const { mutate, isPending, isSuccess, error } = useCreateLocation();
  const form = useForm<LocationFormValues>({
    resolver: zodResolver(addLocationSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: LocationFormValues) => {
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Added new location");

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
                <FormLabel className="text-base">Location Name</FormLabel>
                <FormControl>
                  <Input
                    className="text-base"
                    placeholder="E.g. land, house, shop e.t.c"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && (
            <span className="text-sm text-red-600">{error.message}</span>
          )}

          <Button
            type="submit"
            size={"lg"}
            disabled={isPending}
            className="bg-gray-900 text-white w-full mt-8 text-base font-medium"
          >
            {isPending ? <Spinner /> : "Add Location"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddLocationForm;
