import { Button } from "../ui/button";

type PropsType = {
  delFn: () => void;
  onClose: () => void;
};

const DeleteModal = ({ onClose, delFn }: PropsType) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#000000e9] flex items-center justify-center z-50">
      <div className="p-5 bg-white rounded-lg">
        <h4 className="text-center text-gray-700 font-semibold">
          Are you sure you want to delete?
        </h4>

        <div className="flex items-center gap-8 mt-5 w-full justify-center">
          <Button
            size={"sm"}
            variant={"outline"}
            onClick={onClose}
            className="text-xs"
          >
            Cancel
          </Button>
          <Button
            onClick={delFn}
            size={"sm"}
            variant={"destructive"}
            className="text-xs"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
