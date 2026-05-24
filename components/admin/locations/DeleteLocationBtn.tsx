"use client";

import DeleteModal from "@/components/modals/DeleteModal";
import { useDeleteLocation } from "@/lib/hooks/tanstack/mutations/locations";
import { useState } from "react";

type PropsType = {
  locationId: string;
};
const DeleteLocationBtn = ({ locationId }: PropsType) => {
  const { mutate, isPending, isSuccess, error } = useDeleteLocation();
  const [showModal, setShowModal] = useState(false);
  const delFn = () => {
    mutate(locationId);
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

export default DeleteLocationBtn;
