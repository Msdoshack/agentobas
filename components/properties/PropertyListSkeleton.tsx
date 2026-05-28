import PropertyCardSkeleton from "./PropertyCardSkeleton";
import { cn } from "@/lib/utils";

const PropertyListSkeleton = ({ isGrid }: { isGrid: boolean }) => {
  return (
    <div
      className={cn(
        "max-w-6xl mx-auto shadow-lg",
        isGrid
          ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-2 gap-y-6 sm:gap-4"
          : "flex overflow-x-scroll gap-4 ",
      )}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <PropertyCardSkeleton key={i} isGrid={isGrid} />
      ))}
    </div>
  );
};

export default PropertyListSkeleton;
