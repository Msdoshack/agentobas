import Heading from "@/components/admin/Heading";

import UpdatePermissionForm from "@/components/admin/permissions/UpdatePermissionForm";

import { permissionsApi } from "@/lib/api/permissions";
import { cookies } from "next/headers";

const page = async ({
  params,
}: {
  params: Promise<{ permissionId: string }>;
}) => {
  const cookie = await cookies();
  const token = cookie.get("auth_token");
  const permissionId = (await params)?.permissionId;
  const permission = await permissionsApi.get({
    id: permissionId,
    cookieHeader: `${token?.name}=${token?.value}`,
  });

  return (
    <div className="py-8 w-full">
      <div className="max-w-4xl mx-auto">
        <Heading name="Update Permission" />
        <UpdatePermissionForm permission={permission.data} />
      </div>
    </div>
  );
};

export default page;
