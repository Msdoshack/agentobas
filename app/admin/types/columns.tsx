"use client";

import DeleteTypeBtn from "@/components/admin/types/DeleteTypeBtn";
import { Checkbox } from "@/components/ui/checkbox";

import { URLS } from "@/constants/enum";

import { PropertyCategory } from "@/types/propertyCategory";

import { ColumnDef } from "@tanstack/react-table";

import Link from "next/link";

export const columns: ColumnDef<PropertyCategory>[] = [
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
    accessorKey: "sn",
    header: "S/N",
    cell: ({ row }) => {
      const idx = (row.index + 1) as number;

      return <span>{idx}</span>;
    },
  },
  {
    accessorKey: "name",
    header: "Type",
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      const id = row.original?.id;
      return <Link href={`${URLS.adminPage}/${id}`}>{name}</Link>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const type = row.original;

      return (
        <div className="flex items-center gap-16">
          <Link
            href={`${URLS.updateTypePage}/${type.id}`}
            className="px-3 py-1.5 rounded-md text-white bg-gray-900"
          >
            update
          </Link>

          <DeleteTypeBtn typeId={type.id} />
        </div>
      );
    },
  },
];
