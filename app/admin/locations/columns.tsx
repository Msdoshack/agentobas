"use client";

import DeleteLocationBtn from "@/components/admin/locations/DeleteLocationBtn";
import { Checkbox } from "@/components/ui/checkbox";

import { URLS } from "@/constants/enum";

import { Location } from "@/types/locations";

import { ColumnDef } from "@tanstack/react-table";

import Link from "next/link";

export const columns: ColumnDef<Location>[] = [
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
    header: "Location",
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
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
    id: "actions",
    cell: ({ row }) => {
      const location = row.original;

      return (
        <div className="flex items-center gap-16">
          <Link
            href={`${URLS.updateLocationPage}/${location.id}`}
            className="px-3 py-1.5 rounded-md text-white bg-gray-900"
          >
            update
          </Link>

          <DeleteLocationBtn locationId={location.id} />
        </div>
      );
    },
  },
];
