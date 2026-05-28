"use client";
import { PropertyFilterParams } from "@/types/property";
import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

type Props = {
  count: number;
  searchParams: PropertyFilterParams;
};

const FilterHeading = ({ count, searchParams }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClearAll = () => {
    router.push(pathname);
  };

  // 1. Transform query parameters into an organized, readable array
  const activeFilters = useMemo(() => {
    const filters: string[] = [];

    if (searchParams.search?.trim()) {
      filters.push(`"${searchParams.search.trim()}"`);
    }
    if (searchParams.category) {
      filters.push(searchParams.category);
    }
    if (searchParams.listingType) {
      filters.push(`For ${searchParams.listingType}`);
    }

    return filters;
  }, [searchParams.search, searchParams.category, searchParams.listingType]);

  // If no filters are active, cleanly return early without rendering layout containers
  if (activeFilters.length === 0) return null;

  return (
    <div className="mb-4 px-2 sm:px-4 max-w-6xl mx-auto w-full">
      <div className="flex items-start justify-between gap-4 bg-slate-50 border border-slate-100 p-3 rounded-xl">
        <div>
          <div className="flex items-center flex-wrap gap-2 text-slate-800 text-sm sm:text-base font-medium">
            {/* 2. Seamlessly join strings with a clean structural separator */}
            <p className="capitalize text-blue-900 font-semibold">
              {activeFilters.join(" • ")}
            </p>
          </div>
          <span className="text-slate-500 text-xs font-normal">
            ({count} {count === 1 ? "result" : "results"})
          </span>
        </div>

        <button
          onClick={handleClearAll}
          className="flex items-center gap-1 text-slate-500 hover:text-red-600 text-xs font-medium transition cursor-pointer shrink-0"
        >
          <X size={16} />
          Clear active filters
        </button>
      </div>
    </div>
  );
};

export default FilterHeading;
