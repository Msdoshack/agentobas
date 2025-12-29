import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const Spinner = (className: { className?: string }) => {
  return (
    <div className={cn("w-fit animate-spin", className)}>
      <LoaderCircle />
    </div>
  );
};

export default Spinner;
