"use client";
import { CldImage, CldUploadButton, CldVideoPlayer } from "next-cloudinary";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NumericFormat } from "react-number-format";
import {
  addPropertySchema,
  PropertyFormValues,
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

import { useCallback, useEffect, useState } from "react";
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

import { ListingType } from "@/types/listingType";
import { Category } from "@/types/Category";
import { useCreateProperty } from "@/lib/hooks/tanstack/mutations/properties";
import { Location } from "@/types/locations";

type PropsType = {
  locations: Location[];
  listingTypes: ListingType[];
  categories: Category[];
};

export default function AddPropertyForm({
  listingTypes,
  locations,
  categories,
}: PropsType) {
  const { mutate, isPending, isSuccess, error } = useCreateProperty();
  const [Description, setDescription] = useState("");

  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(addPropertySchema),
    defaultValues: {
      title: "",
      price: "",
      categoryId: "",
      listingTypeId: "",
      locationId: "",
      baths: "",
      beds: "",
      plots: "",
      images: [],
      videos: [],
    },
  });

  const handleImageUpload = useCallback(
    (result: any) => {
      console.log(result);
      if (result.event === "success") {
        const info = result.info;

        const image = {
          url: info.secure_url,
          publicId: info.public_id,
          thumbnail: info.thumnail_url || info.secure_url,
        };

        const current = form.getValues("images") || [];

        form.setValue("images", [...current, image]);
      }
    },
    [form],
  );

  const handleVideoUpload = useCallback(
    (result: any) => {
      console.log(result);
      if (result.event === "success") {
        const info = result.info;

        const video = {
          url: info.secure_url,
          publicId: info.public_id,
          thumbnail: info.thumnail_url || info.secure_url,
        };

        const current = form.getValues("videos") || [];

        form.setValue("videos", [...current!, video]);
      }
    },
    [form],
  );

  const onSubmit = (values: PropertyFormValues) => {
    console.log(values);
    mutate({
      ...values,
      categoryId: values.categoryId,
      listingTypeId: values.listingTypeId,
      locationId: values.locationId,
      price: parseInt(values.price),
      baths: parseInt(values.baths!),
      beds: parseInt(values.beds!),
      description: Description,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("product Added");

      setDescription("");
      form.reset();

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isSuccess]);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          console.error("Validation errors:", errors);
        })}
        className="space-y-6 p-4 border rounded-lg mt-16 text-black"
      >
        {/* Product basic info */}

        {/* Property title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Title</FormLabel>
              <FormControl>
                <Input placeholder="Nike Air Force 1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*Property Category */}
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
                    <SelectValue
                      placeholder="Select category"
                      className="text-red-500"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {categories?.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id.toString()}
                      >
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

        {/* Listing-Type Select */}
        <FormField
          control={form.control}
          name="listingTypeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Listing-Type</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select listing-type" />
                  </SelectTrigger>
                  <SelectContent>
                    {listingTypes?.map((type) => (
                      <SelectItem key={type.id} value={type.id.toString()}>
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

        {/* Locations Select */}
        <FormField
          control={form.control}
          name="locationId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations?.map((location) => (
                      <SelectItem
                        key={location.id}
                        value={location.id.toString()}
                      >
                        {location.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Property Price */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <NumericFormat
                  customInput={Input}
                  thousandSeparator=","
                  allowNegative={false}
                  prefix="₦ "
                  placeholder="Property price"
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                />
                {/* <Input placeholder="price" {...field} /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*  Property Plots*/}
        <FormField
          control={form.control}
          name="plots"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plots</FormLabel>
              <FormControl>
                <Input placeholder="Plots" {...field} />
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
            value={Description}
            onChange={(e) => setDescription(e)}
          />
        </div>

        {error && <span className="error">{error.message}</span>}

        {/* Product Images */}
        <FormField
          control={form.control}
          name="images"
          render={() => (
            <FormItem>
              <FormLabel>Property Images</FormLabel>

              <CldUploadButton
                className="px-4 py-2  rounded-md mt-4 bg-gray-900 text-white font-medium w-60"
                uploadPreset="igobas"
                options={{
                  multiple: true,
                  resourceType: "image",
                  clientAllowedFormats: ["jpg", "jpeg", "png", "webp"],
                }}
                onSuccess={handleImageUpload}
              >
                Upload Images
              </CldUploadButton>

              <div className="flex gap-4 flex-wrap my-8">
                {form.watch("images")?.map((url, i) => (
                  <div
                    className="w-36 h-36 object-cover rounded border relative"
                    key={i}
                  >
                    <CldImage
                      src={url.publicId}
                      alt="img"
                      width={144}
                      height={144}
                    />
                    {/* <img src={url} alt={`preview-${i}`} /> */}
                  </div>
                ))}
              </div>

              {/* <div className="space-y-3">
                {imageFields.map((field, index) => (
                  <div key={field.id} className="flex gap-2">
                    <Input
                      placeholder="https://example.com/image.jpg"
                      {...form.register(`images.${index}`)}
                    />

                    {imageFields.length > 1 && (
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => remove(index)}
                      >
                        ✕
                      </Button>
                    )}
                  </div>
                ))}
              </div> */}

              {/* <Button
                type="button"
                variant="secondary"
                className="mt-3"
                onClick={() => append("")}
              >
                + Add by image URL
              </Button> */}

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Product Videos */}
        <FormField
          control={form.control}
          name="videos"
          render={() => (
            <FormItem>
              <FormLabel>Property Video</FormLabel>

              <CldUploadButton
                className="px-4 py-2  rounded-md mt-4 bg-gray-900 text-white font-medium w-60"
                uploadPreset="igobas"
                options={{
                  multiple: true,
                  resourceType: "video",
                  clientAllowedFormats: ["mp4", "mov", "avi", "webm"],
                }}
                onSuccess={handleVideoUpload}
                // onSuccess={(result) => {
                //   if (result.event === "success") {
                //     const uploadedUrl = (result.info as { secure_url: string })
                //       .secure_url;
                //     // const uploadedUrl = result.info.secure_url;
                //     form.setValue("videos", [
                //       ...form.getValues("videos"),
                //       uploadedUrl,
                //     ]);
                //   }
                // }}
              >
                Upload Videos
              </CldUploadButton>

              <div className="my-8">
                {form.watch("videos")?.map((url, i) => (
                  <div key={i} className="rounded border relative">
                    <CldVideoPlayer
                      src={url?.publicId}
                      width="500"
                      height="500"
                      controls
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* <div className="space-y-3">
                {videoFields.map((field, index) => (
                  <div key={field.id} className="flex gap-2">
                    <Input
                      placeholder="https://example.com/video.mp4"
                      {...form.register(`videos.${index}`)}
                    />

                    {videoFields.length > 1 && (
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => removeVid(index)}
                      >
                        ✕
                      </Button>
                    )}
                  </div>
                ))}
              </div> */}

              {/* <Button
                type="button"
                variant="secondary"
                className="mt-3"
                onClick={() => appendVid("")}
              >
                + Add by video URL
              </Button> */}

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
