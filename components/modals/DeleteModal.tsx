import { useEffect } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type PropsType = {
  delFn: () => void;
  onClose: () => void;
  isPending: boolean;
  error: Error | null;
  isSuccess: boolean;
};

const DeleteModal = ({
  onClose,
  delFn,
  error,
  isPending,
  isSuccess,
}: PropsType) => {
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      toast.success("delete");

      onClose();

      router.refresh();
    }
  }, [isSuccess, error]);
  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-[#000000e9] flex items-center justify-center z-50">
      <div className="p-5 bg-white rounded-lg">
        <h4 className="text-center text-gray-700 font-semibold">
          Are you sure you want to delete?
        </h4>

        <div className="flex items-center gap-8 mt-5 mb-3 w-full justify-center">
          <Button
            size={"sm"}
            variant={"outline"}
            onClick={onClose}
            className="text-xs"
          >
            Cancel
          </Button>
          <Button
            disabled={isPending}
            onClick={delFn}
            size={"sm"}
            variant={"destructive"}
            className="text-xs"
          >
            Delete
          </Button>
        </div>
        <div>
          {error && <p className="error text-center">{error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
