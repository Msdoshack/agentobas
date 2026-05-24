import Heading from "@/components/admin/Heading";
import UpdateUserFormComp from "@/components/admin/users/UpdateUserForm";
import { usersApi } from "@/lib/api/users";
import { cookies } from "next/headers";

const page = async ({ params }: { params: Promise<{ userId: string }> }) => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token");

  const userId = (await params)?.userId;
  const user = await usersApi.get({
    id: userId,
    cookieHeader: `auth_token=${authToken?.value}`,
  });

  return (
    <div className="py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Heading name="Update User" />
        <UpdateUserFormComp user={user.data} />
      </div>
    </div>
  );
};

export default page;
