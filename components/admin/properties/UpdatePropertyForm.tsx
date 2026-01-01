"use client";
import { CldUploadButton } from "next-cloudinary";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UpdatePropertyFormValues,
  updatePropertySchema,
} from "@/lib/validators/propertyValidator";
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
// import { useGetBrands } from "@/lib/tanstack/queries/brand/query";
// import { useAddProductMutation } from "@/lib/tanstack/mutations/product/mutation";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import PropertyDescriptionEditor from "./PropertyDescEditor";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { PROPERT_CATEGORIES, PROPERTY_TYPE } from "@/constants";

export default function UpdatePropertyForm() {
  // const {
  //   data: brands,
  //   isFetching: isBrandFetching,
  //   isLoading: isBrandLoading,
  // } = useGetBrands();

  // const { mutate, isPending, isSuccess, isError } = useAddProductMutation();
  const [longDesc, setLongDesc] = useState("");

  const isPending = false;
  const isSuccess = false;
  const isError = false;

  const [categoryId, setCategoryId] = useState<string | null>(null);
  const form = useForm<UpdatePropertyFormValues>({
    resolver: zodResolver(updatePropertySchema),
    defaultValues: {
      name: "",
      isAvailable: true,
      description: "",
      categoryId: "",
      typeId: "",
      baths: 0,
      beds: 0,
      price: "",
      sqft: 0,
      imgs: [],
    },
  });

  const onSubmit = (values: UpdatePropertyFormValues) => {
    // mutate({ ...values, description: longDesc });
  };

  useEffect(() => {
    if (categoryId) {
      form.setValue("categoryId", categoryId);
    }
  }, [categoryId]);

  useEffect(() => {
    if (isSuccess && !isError) {
      toast.success("product Added");
      setCategoryId(null);
      setLongDesc("");
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
        {/* Product Images */}
        <FormField
          control={form.control}
          name="imgs"
          render={() => (
            <FormItem>
              <FormLabel>Property Images</FormLabel>

              <CldUploadButton
                className="px-4 py-2  rounded-md mt-4 bg-gray-900 text-white font-medium"
                uploadPreset="digo_app"
                options={{ multiple: true }}
                onSuccess={(result) => {
                  if (result.event === "success") {
                    const uploadedUrl = (result.info as { secure_url: string })
                      .secure_url;
                    // const uploadedUrl = result.info.secure_url;
                    form.setValue("imgs", [
                      ...form.getValues("imgs"),
                      uploadedUrl,
                    ]);
                  }
                }}
              >
                Upload Images
              </CldUploadButton>

              <div className="flex gap-4 flex-wrap mt-8">
                {form.watch("imgs")?.map((url, i) => (
                  <div
                    className="w-36 h-auto object-cover rounded border relative"
                    key={i}
                  >
                    <Image src={url} alt={`preview-${i}`} fill />
                  </div>
                ))}
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Product basic info */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Name</FormLabel>
              <FormControl>
                <Input placeholder="Nike Air Force 1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROPERT_CATEGORIES?.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Brand select */}
        <FormField
          control={form.control}
          name="typeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROPERTY_TYPE?.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="beds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Beds</FormLabel>
              <FormControl>
                <Input placeholder="beds" {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="baths"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Baths</FormLabel>
              <FormControl>
                <Input placeholder="baths" {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-3">
          <Label>Description</Label>
          <PropertyDescriptionEditor
            value={longDesc}
            onChange={(e) => setLongDesc(e)}
          />
        </div>

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
