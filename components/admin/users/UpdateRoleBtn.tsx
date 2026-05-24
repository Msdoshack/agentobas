import ChangeUserRoleModal from "@/components/modals/ChangeUserRoleModal";
import {
  useDeleteUserPermission,
  useUpdateUserPermission,
} from "@/lib/hooks/tanstack/mutations/permissions";
import { useGetAllPermissions } from "@/lib/hooks/tanstack/queries/permissions";
import { useGetUserPermissions } from "@/lib/hooks/tanstack/queries/users";
import { useState } from "react";

const MakeAdminBtn = ({ userId }: { userId: string }) => {
  const [to, setTo] = useState("");
  const { data: userP } = useGetUserPermissions(userId);
  const [showModal, setShowModal] = useState(false);
  const { data } = useGetAllPermissions();
  const { mutate, isPending, error, isSuccess } = useUpdateUserPermission();
  const {
    mutate: mutateRemove,
    isPending: removeIsPending,
    error: removeError,
    isSuccess: removeIsSuccess,
  } = useDeleteUserPermission();

  const admin = data?.data.find((permission) => permission.code == "admin");

  const showModalFn = (to: string) => {
    setTo(to);
    setShowModal(true);
  };

  const closeModalFn = () => {
    setTo("");
    setShowModal(false);
  };

  const makeAdmin = () => {
    mutate({ permission: { code: admin?.code! }, userId: userId });
  };

  const makeUser = () => {
    mutateRemove({ permissionId: admin!.id.toString(), userId });
  };

  return (
    <div>
      {userP?.data.includes(admin?.code!) ? (
        <button
          className="p-1  px-2 bg-red-50 text-red-600 rounded-sm text-xs border border-red-600"
          onClick={() => showModalFn("user")}
        >
          Remove admin
        </button>
      ) : (
        <button
          className="bg-green-50  rounded-md p-1 px-2 text-xs  border border-green-600"
          onClick={() => showModalFn("admin")}
        >
          Make admin
        </button>
      )}

      {showModal && (
        <ChangeUserRoleModal
          fn={to === "user" ? makeUser : makeAdmin}
          error={to === "user" ? removeError : error}
          isPending={to === "user" ? removeIsPending : isPending}
          isSuccess={to === "user" ? removeIsSuccess : isSuccess}
          onClose={closeModalFn}
          to={to}
        />
      )}
    </div>
  );
};

export default MakeAdminBtn;
