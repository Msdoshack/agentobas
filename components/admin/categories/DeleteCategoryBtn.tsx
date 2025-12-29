"use client";

import DeleteModal from "@/components/modals/DeleteModal";
import { useState } from "react";

type PropsType = {
  categoryId: string;
};
const DeleteCategoryBtn = ({ categoryId }: PropsType) => {
  const [showModal, setShowModal] = useState(false);
  const delFn = () => {};
  return (
    <>
      <button
        className="px-3 py-1.5 rounded-md text-red-600 bg-red-100"
        onClick={() => setShowModal(true)}
      >
        delete
      </button>

      {showModal && (
        <DeleteModal onClose={() => setShowModal(false)} delFn={delFn} />
      )}
    </>
  );
};

export default DeleteCategoryBtn;
