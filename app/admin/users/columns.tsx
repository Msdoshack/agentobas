"use client";
import DeleteUserBtn from "@/components/admin/users/DeleteUserBtn";
import MakeAdminBtn from "@/components/admin/users/UpdateRoleBtn";
import UserPermissions from "@/components/admin/users/UserPermissions";
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
import { cn } from "@/lib/utils";
import { User } from "@/types/user";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import Link from "next/link";
import { formatDate } from "react-calendar/dist/shared/dateFormatter.js";

export const columns: ColumnDef<User>[] = [
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
    header: "userID",

    // cell: ({ row }) => {
    //   const imgs = row.getValue("images") as string[];
    //   const id = row.original?.id;
    //   return (
    //     <div className="h-20 w-20 overflow-hidden relative rounded-md">
    //       <Link href={`${URLS.adminPage}/${id}`}>
    //         <Image
    //           src={imgs[0]}
    //           alt=""
    //           className="fill"
    //           width={100}
    //           height={100}
    //         />
    //       </Link>
    //     </div>
    //   );
    // },
  },
  {
    accessorKey: "name",
    header: "Name",
    // cell: ({ row }) => {
    //   const name = row.getValue("title") as string;
    //   const id = row.original?.id;
    //   return (
    //     <Link href={`${URLS.adminPage}/${id}`}>
    //       {name.substring(0, 30)}
    //       {name.length > 30 && <span> ...</span>}
    //     </Link>
    //   );
    // },
  },
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "activated",
    header: "Activated",
    cell: ({ row }) => {
      const activated = row.getValue("activated") as boolean;
      return (
        <span className={cn(activated ? "text-green-600" : "text-red-600")}>
          {activated ? "true" : "false"}
        </span>
      );
    },
  },

  {
    header: "Role",
    cell: ({ row }) => {
      const userId = row.getValue("id") as number;

      return <UserPermissions userId={userId.toString()} />;
    },
  },

  {
    accessorKey: "createdAt",
    header: "joined",
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date;

      return <span>{formatDate("US", date)} </span>;
    },
  },
  {
    id: "makeAdmin",
    cell: ({ row }) => {
      const userId = row.getValue("id") as number;
      return <MakeAdminBtn userId={userId.toLocaleString()} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex items-center gap-4">
          <DeleteUserBtn userId={String(user.id)} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-10 w-10 px-2">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(String(user.id))}
              >
                Copy userId
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <TransitionLink href={`${URLS.usersDetailsPage}/${user.id}`}>
                  View User details
                </TransitionLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TransitionLink href={`${URLS.updateUsersPage}/${user.id}`}>
                  Update User
                </TransitionLink>
              </DropdownMenuItem>
              {/* <DropdownMenuItem>
              <DeleteUserBtn userId={String(user.id)} />
            </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
