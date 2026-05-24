"use client";

import DeleteModal from "@/components/modals/DeleteModal";
import { useDeletePermission } from "@/lib/hooks/tanstack/mutations/permissions";
import { useState } from "react";

type PropsType = {
  permissionId: string;
};
const DeletePermissionBtn = ({ permissionId }: PropsType) => {
  const { mutate, isPending, isSuccess, error } = useDeletePermission();
  const [showModal, setShowModal] = useState(false);

  const delFn = () => {
    mutate(permissionId);
  };
  return (
    <>
      <button
        className="px-3 py-1.5 rounded-md text-red-600 bg-red-100"
        onClick={() => setShowModal(true)}
      >
        delete
      </button>

      {showModal && (
        <DeleteModal
          onClose={() => setShowModal(false)}
          delFn={delFn}
          isPending={isPending}
          isSuccess={isSuccess}
          error={error}
        />
      )}
    </>
  );
};

export default DeletePermissionBtn;
