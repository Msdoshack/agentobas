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
import { Location } from "@/types/locations";
import { useUpdateLocation } from "@/lib/hooks/tanstack/mutations/locations";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { URLS } from "@/constants/enum";
import Spinner from "@/components/Spinner";

type PropsType = {
  location: Location;
};

const UpdateLocationForm = ({ location }: PropsType) => {
  const { mutate, isPending, isSuccess, error } = useUpdateLocation();
  const form = useForm<LocationFormValues>({
    resolver: zodResolver(addLocationSchema),
    defaultValues: {
      name: location.name,
    },
  });

  const router = useRouter();

  const onSubmit = async (values: LocationFormValues) => {
    mutate({ id: location.id, name: values.name });
  };

  useEffect(() => {
    if (isSuccess && !error) {
      toast.success("Updated");
      form.reset();

      router.push(URLS.allLocationPage);

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
                <FormLabel className="text-base">Location</FormLabel>
                <FormControl>
                  <Input
                    autoFocus
                    className="text-base"
                    placeholder="E.g. oruka, ivie road, lucas, river road"
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
            {isPending ? <Spinner /> : "Update Location"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateLocationForm;
