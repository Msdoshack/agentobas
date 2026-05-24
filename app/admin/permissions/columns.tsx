"use client";

import DeletePermissionBtn from "@/components/admin/permissions/DeletePermissionBtn";
import { Checkbox } from "@/components/ui/checkbox";

import { URLS } from "@/constants/enum";

import { Permission } from "@/types/permission";

import { ColumnDef } from "@tanstack/react-table";

import Link from "next/link";

export const columns: ColumnDef<Permission>[] = [
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
    accessorKey: "id",
    header: "ID",
  },

  {
    accessorKey: "code",
    header: "Permission",
    cell: ({ row }) => {
      const name = row.getValue("code") as string;
      const id = row.original?.id;
      return <Link href={`${URLS.adminPage}/${id}`}>{name}</Link>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const permission = row.original;

      return (
        <div className="flex items-center gap-16">
          {/* <Link
            href={`${URLS.updatePermissionPage}/${permission.id}`}
            className="px-3 py-1.5 rounded-md text-white bg-gray-900"
          >
            update
          </Link> */}

          <DeletePermissionBtn permissionId={permission.id.toString()} />
        </div>
      );
    },
  },
];
