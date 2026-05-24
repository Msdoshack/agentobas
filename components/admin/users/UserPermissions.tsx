import Spinner from "@/components/Spinner";
import { useGetUserPermissions } from "@/lib/hooks/tanstack/queries/users";

const UserPermissions = ({ userId }: { userId: string }) => {
  const { data, isLoading } = useGetUserPermissions(userId);

  if (isLoading) return <Spinner />;
  return (
    <div>
      {data?.data.includes("admin") ? (
        <span className="text-green-600 font-medium">Admin</span>
      ) : (
        <span>User</span>
      )}
    </div>
  );
};

export default UserPermissions;
