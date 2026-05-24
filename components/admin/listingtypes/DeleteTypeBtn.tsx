"use client";

import DeleteModal from "@/components/modals/DeleteModal";
import { useDeleteListingType } from "@/lib/hooks/tanstack/mutations/listingTypes";
import { useState } from "react";

type PropsType = {
  typeId: string;
};
const DeleteTypeBtn = ({ typeId }: PropsType) => {
  const { mutate, isPending, isSuccess, error } = useDeleteListingType();
  const [showModal, setShowModal] = useState(false);

  const delFn = () => {
    mutate(typeId);
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

export default DeleteTypeBtn;
