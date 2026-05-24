import { useEffect } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";

type PropsType = {
  fn: () => void;
  onClose: () => void;
  isPending: boolean;
  error: Error | null;
  isSuccess: boolean;
  to: string;
};

const ChangeUserRoleModal = ({
  onClose,
  fn,
  error,
  isPending,
  isSuccess,
  to,
}: PropsType) => {
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      toast.success("successfull");

      onClose();

      router.refresh();
    }
  }, [isSuccess, error]);
  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-[#000000e9] flex items-center justify-center z-50">
      <div className="p-5 bg-white rounded-lg">
        {to === "user" && (
          <h4 className="text-center text-gray-700 font-semibold text-sm">
            Are you sure you want to remove this user from admin?
          </h4>
        )}

        {to === "admin" && (
          <h4 className="text-center text-gray-700 font-semibold text-sm">
            Are you sure you want to make this user admin?
          </h4>
        )}

        <div className="flex items-center gap-8 mt-5 mb-3 w-full justify-center">
          <Button
            size={"sm"}
            variant={"outline"}
            onClick={onClose}
            className="text-xs"
          >
            No
          </Button>
          <Button
            disabled={isPending}
            onClick={fn}
            size={"sm"}
            variant={"destructive"}
            className="text-xs"
          >
            {isPending ? <Spinner /> : "Yes"}
          </Button>
        </div>
        <div>
          {error && <p className="error text-center">{error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ChangeUserRoleModal;
