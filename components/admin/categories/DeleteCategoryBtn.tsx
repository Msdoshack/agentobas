"use client";

import DeleteModal from "@/components/modals/DeleteModal";
import { useDeleteCategory } from "@/lib/hooks/tanstack/mutations/categories";
import { useState } from "react";

type PropsType = {
  categoryId: string;
};
const DeleteCategoryBtn = ({ categoryId }: PropsType) => {
  const { mutate, isPending, isSuccess, error } = useDeleteCategory();
  const [showModal, setShowModal] = useState(false);
  const delFn = () => {
    mutate(categoryId);
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
          error={error}
          isSuccess={isSuccess}
        />
      )}
    </>
  );
};

export default DeleteCategoryBtn;
