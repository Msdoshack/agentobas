"use client";
import { useSignout } from "@/lib/hooks/tanstack/mutations/auth";
import { Power } from "lucide-react";
import Spinner from "../Spinner";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignoutButton = () => {
  const { mutate, isPending, error, isSuccess } = useSignout();
  const router = useRouter();
  const handleSignout = () => {
    mutate();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("signed out");
      router.refresh();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <button onClick={handleSignout} disabled={isPending}>
      {isPending ? (
        <Spinner />
      ) : (
        <span className="text-sm flex items-center gap-1 text-red-700 font-medium p-1 rounded-sm hover:bg-gray-50 cursor-pointer">
          <Power size={14} /> Signout
        </span>
      )}
    </button>
  );
};

export default SignoutButton;
