"use client";
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
import { Property } from "@/types/property";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
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
      const imgs = row.getValue("images") as string[];
      const id = row.original?.id;
      return (
        <div className="h-20 w-20 overflow-hidden relative rounded-md">
          <Link href={`${URLS.adminPage}/${id}`}>
            <Image
              src={imgs[0]}
              alt=""
              className="fill"
              width={100}
              height={100}
            />
          </Link>
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
        <Link href={`${URLS.adminPage}/${id}`}>
          {name.substring(0, 30)}
          {name.length > 30 && <span> ...</span>}
        </Link>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    // cell: ({ row }) => {
    //   const variants = row.getValue("category");

    //   return <span>{getTablePriceSummary(variants).current}</span>;
    // },
  },

  {
    accessorKey: "type",
    header: "Type",
    // cell: ({ row }) => {
    //   const brand = row.getValue("brand") as Prop;
    //   return <span>{brand.name}</span>;
    // },
  },

  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.getValue("price") as number;
      const type = row.getValue("type");

      return <span>{formatPrice(price, type as string)} </span>;
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
              <Link href={`${URLS.propertyDetailsPage}/${property.id}`}>
                View Property details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`${URLS.updatePropertyPage}/${property.id}`}>
                Update Property
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
