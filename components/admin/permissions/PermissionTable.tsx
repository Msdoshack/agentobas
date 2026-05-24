import { columns } from "@/app/admin/permissions/columns";
import { DataTable } from "@/app/admin/permissions/data-table";

import { permissionsApi } from "@/lib/api/permissions";
import { cookies } from "next/headers";

const PermissionTable = async () => {
  const cookie = await cookies();
  const token = cookie.get("auth_token");

  const permission = await permissionsApi.getAll(
    `${token?.name}=${token?.value}`,
  );

  return <DataTable columns={columns} data={permission.data} />;
};

export default PermissionTable;
