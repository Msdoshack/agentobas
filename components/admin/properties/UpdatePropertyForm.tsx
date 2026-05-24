"use client";
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

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Property } from "@/types/property";
import { Location } from "@/types/locations";
import { Category } from "@/types/Category";
import { ListingType } from "@/types/listingType";
import { propertiesApi } from "@/lib/api/properties";
import { useUpdateProperty } from "@/lib/hooks/tanstack/mutations/properties";
import { error } from "console";
import { useRouter } from "next/navigation";
import { URLS } from "@/constants/enum";
import { NumericFormat } from "react-number-format";

type PropsType = {
  property: Property;
  locations: Location[];
  categories: Category[];
  listingTypes: ListingType[];
};

export default function UpdatePropertyForm({
  property,
  listingTypes,
  locations,
  categories,
}: PropsType) {
  const { mutate, isPending, isSuccess, error } = useUpdateProperty();
  const router = useRouter();

  const [description, setDescription] = useState(property.description);

  const form = useForm<UpdatePropertyFormValues>({
    resolver: zodResolver(updatePropertySchema),
    defaultValues: {
      title: property.title,
      price: property.price.toString(),
      categoryId: property.category.id.toString(),
      listingTypeId: property.listingType.id.toString(),
      locationId: property.location.id.toString(),
      baths: property.baths?.toString(),
      beds: property.beds?.toString(),
      plots: property.plots,
      isAvailable: String(property.isAvailable),
    },
  });

  const onSubmit = (values: UpdatePropertyFormValues) => {
    mutate({
      data: {
        ...values,
        description,
        price: parseInt(values.price),
        beds: parseInt(values.beds!),
        baths: parseInt(values.baths!),
        plots: values.plots,
        listingTypeId: values.listingTypeId,
        categoryId: values.categoryId,
        locationId: values.locationId,
        isAvailable: Boolean(values.isAvailable === "true"),
      },
      id: property.id.toString(),
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("product Added");
      router.push(URLS.adminAllPropertyPage);

      setDescription("");

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
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="E.g a bedsitter available at ..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category */}
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
                    <SelectValue placeholder="Update category" />
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

        {/*  Listing Type */}
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
                    <SelectValue placeholder="Update listing-type" />
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
                    <SelectValue placeholder="Update Location" />
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

        <FormField
          control={form.control}
          name="isAvailable"
          render={({ field }) => (
            <FormItem>
              <FormLabel>is Available?</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Update Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">Yes</SelectItem>
                    <SelectItem value="false">No</SelectItem>
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
            value={description}
            onChange={(e) => setDescription(e)}
          />
        </div>

        {error && <span className="error">{error.message}</span>}

        <Button
          size={"lg"}
          className="w-full bg-gray-900 text-base font-medium"
          disabled={isPending}
          type="submit"
        >
          {isPending ? <Spinner /> : "Update Property"}
        </Button>
      </form>
    </Form>
  );
}
