"use client";
import DeleteModal from "@/components/modals/DeleteModal";
import { useDeleteUser } from "@/lib/hooks/tanstack/mutations/users";
import { useState } from "react";

type PropsType = {
  userId: string;
};
const DeleteUserBtn = ({ userId }: PropsType) => {
  const { mutate, isPending, isSuccess, error } = useDeleteUser();
  const [showModal, setShowModal] = useState(false);
  const delFn = () => {
    mutate(userId);
  };
  return (
    <>
      <button
        className="px-3 py-1.5 rounded-md  bg-red-100"
        onClick={() => setShowModal(true)}
      >
        delete
      </button>

      {showModal && (
        <DeleteModal
          onClose={() => setShowModal(false)}
          delFn={delFn}
          isPending={isPending}
          error={error}
          isSuccess={isSuccess}
        />
      )}
    </>
  );
};

export default DeleteUserBtn;
