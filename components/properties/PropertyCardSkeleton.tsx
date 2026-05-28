"use client";

import { cn } from "@/lib/utils";

import { Heart, MapPin } from "lucide-react";

const PropertyCardSkeleton = ({ isGrid }: { isGrid: boolean }) => {
  const bg =
    "animate-pulse bg-linear-to-r from-gray-200 via-gray-300 to-gray-200";
  return (
    <div
      className={cn(
        "bg-white rounded-md cursor-pointer transition-all hover:transform hover:-translate-y-2 w-full",
        !isGrid && "min-w-56 flex-nowrap",
      )}
    >
      {/* image Wrapper*/}
      <div
        className={cn(
          "relative h-56 w-56 flex items-center justify-center",
          isGrid && "w-full",
        )}
      >
        {/* img */}
        <div className={cn(bg, "absolute inset-0")} />

        <button className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full shadow-lg border-none cursor-pointer transition transform duration-200 hover:scale-110">
          <Heart size={20} className="text-gray-500" />
        </button>

        {/* price */}
        <div
          className={cn(
            bg,
            "absolute w-1/2 left-4 bottom-4 gradient-bg text-white px-3 py-2 rounded-full",
          )}
        />
      </div>

      <div>
        <div className="p-1 sm:p-3">
          {/* title */}
          <h3
            className={cn(
              bg,
              " h-4 w-3/4 text-gray-800 line-clamp-2 capitalize",
            )}
          />

          {/* category */}
          <div className="my-1 flex gap-1">
            <div className={cn(bg, "rounded-md px-2 py-0.5 w-8 h-4")} />

            <div className={cn(bg, " w-8 h-4")} />
          </div>

          <div className="text-gray-500 flex gap-2 mt-2 mb-4 text-sm items-center">
            <MapPin size={16} />

            <div className={cn(bg, "line-clamp-1 w-20  h-4")} />
          </div>

          <div className={cn(bg, "w-2/3 h-4")}></div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;
