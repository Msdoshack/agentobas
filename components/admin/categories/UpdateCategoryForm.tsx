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

const UpdateCategoryForm = () => {
  // const { mutate, isPending, isSuccess, error } = useAddCategoryMutation();
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: CategoryFormValues) => {
    // mutate({ values, parentId: parentCategoryId });
  };

  // useEffect(() => {
  //   if (isSuccess && !error) {
  //     toast.success("Added new category");
  //     form.reset();
  //     setParentCategoryId(null);
  //     return;
  //   }
  // }, [isSuccess, error]);

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
                    className="text-base"
                    placeholder="E.g. land, house, shop e.t.c"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size={"lg"}
            // disabled={isPending}
            className="bg-gray-900 text-white w-full mt-8 text-base font-medium"
          >
            Update Category
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateCategoryForm;
