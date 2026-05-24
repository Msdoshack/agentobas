"use server";
import { columns } from "@/app/admin/users/columns";
import { DataTable } from "@/app/admin/users/data-table";
import { usersApi } from "@/lib/api/users";
import { cookies } from "next/headers";

const UserTable = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token");

  const users = await usersApi.getAll(`${authToken?.name}=${authToken?.value}`);

  return <DataTable columns={columns} data={users?.data} />;
};

export default UserTable;
