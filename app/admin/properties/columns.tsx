"use client";
import TransitionLink from "@/components/TransitionLink";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { URLS } from "@/constants/enum";
import { cn, formatPrice } from "@/lib/utils";
import { Category } from "@/types/Category";
import { ListingType } from "@/types/listingType";
import { Location } from "@/types/locations";
import { Property, PropertyImage } from "@/types/property";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export const columns: ColumnDef<Property>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        checked={row.getIsSelected()}
      />
    ),
  },
  {
    accessorKey: "images",
    header: "Image",

    cell: ({ row }) => {
      const imgs = row.getValue("images") as PropertyImage[];
      const id = row.original?.id;
      return (
        <div className="h-20 w-20 overflow-hidden relative rounded-md">
          <TransitionLink href={`${URLS.adminAllPropertyPage}/${id}`}>
            <CldImage
              src={imgs[0].publicId}
              alt="img"
              width={100}
              height={100}
            />
          </TransitionLink>
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Name",
    cell: ({ row }) => {
      const name = row.getValue("title") as string;
      const id = row.original?.id;
      return (
        <TransitionLink
          href={`${URLS.adminAllPropertyPage}/${id}`}
          className="text-sm"
        >
          {name.substring(0, 30)}
          {name.length > 30 && <span> ...</span>}
        </TransitionLink>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category = row.getValue("category") as Category;

      return <span className="text-sm">{category.name}</span>;
    },
  },

  {
    accessorKey: "listingType",
    header: "Listing-Type",
    cell: ({ row }) => {
      const listingType = row.getValue("listingType") as ListingType;
      return <span>{listingType.name}</span>;
    },
  },

  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => {
      const location = row.getValue("location") as Location;
      return <span className="text-sm">{location.name}</span>;
    },
  },

  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.getValue("price") as number;
      const listingType = row.getValue("listingType") as ListingType;

      return (
        <span className="text-sm">{formatPrice(price, listingType.name)} </span>
      );
    },
  },

  {
    accessorKey: "isAvailable",
    header: "Status",
    cell: ({ row }) => {
      const isAvailable = row.getValue("isAvailable") as boolean;
      return (
        <span
          className={cn(isAvailable ? "text-green-600" : "text-red-600")}
        >{`${isAvailable ? "Available" : "Not Available"}`}</span>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const property = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(property.id))}
            >
              Copy PropertyId
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <TransitionLink
                href={`${URLS.adminAllPropertyPage}/${property.id}`}
              >
                View Property details
              </TransitionLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <TransitionLink
                href={`${URLS.adminAllPropertyPage}/${property.id}/update`}
              >
                Update Property
              </TransitionLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
