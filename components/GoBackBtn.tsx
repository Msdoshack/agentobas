"use client";
import { ArrowLeft } from "lucide-react";

import { useRouter } from "next/navigation";

const GoBackBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={router.back}
      className="flex items-center -mt-4 mb-8 px-0.5"
    >
      <ArrowLeft /> Back
    </button>
  );
};

export default GoBackBtn;
