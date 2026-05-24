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
import { Category } from "@/types/Category";
import { useUpdateCategory } from "@/lib/hooks/tanstack/mutations/categories";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { URLS } from "@/constants/enum";
import Spinner from "@/components/Spinner";

type PropsType = {
  category: Category;
};

const UpdateCategoryForm = ({ category }: PropsType) => {
  const { mutate, isPending, isSuccess, error } = useUpdateCategory();
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      name: category.name,
    },
  });

  const router = useRouter();

  const onSubmit = async (values: CategoryFormValues) => {
    mutate({ id: category.id, name: values.name });
  };

  useEffect(() => {
    if (isSuccess && !error) {
      toast.success("Added new category");
      form.reset();

      router.push(URLS.allCategoryPage);

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
                <FormLabel className="text-base">Category</FormLabel>
                <FormControl>
                  <Input
                    autoFocus
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
            {isPending ? <Spinner /> : "Update Category"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateCategoryForm;
