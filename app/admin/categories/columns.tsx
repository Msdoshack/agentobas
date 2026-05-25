"use client";

import DeleteCategoryBtn from "@/components/admin/categories/DeleteCategoryBtn";
import TransitionLink from "@/components/TransitionLink";
import { Checkbox } from "@/components/ui/checkbox";

import { URLS } from "@/constants/enum";

import { Category } from "@/types/Category";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Category>[] = [
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
    header: "Category",
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      const id = row.original?.id;
      return (
        <TransitionLink href={`${URLS.adminPage}/${id}`}>
          {name.substring(0, 30)}
          {name.length > 30 && <span> ...</span>}
        </TransitionLink>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <div className="flex items-center gap-16">
          <TransitionLink
            href={`${URLS.updateCategoryPage}/${category.id}`}
            className="px-3 py-1.5 rounded-md text-white bg-gray-900"
          >
            update
          </TransitionLink>

          <DeleteCategoryBtn categoryId={category.id} />
        </div>
      );
    },
  },
];
