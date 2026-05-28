"use client";
import { Suspense, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { PROPERTY_FILTER_ENUM } from "@/constants/enum";
import { PropertyMetadata } from "@/types/property";

type PropsType = {
  metadata: PropertyMetadata;
};

const PaginationInner = ({ metadata }: PropsType) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = useMemo(() => {
    const p = Number(searchParams.get(PROPERTY_FILTER_ENUM.PAGE)) || 1;

    return Math.max(1, Math.min(p, metadata.lastPage || 1));
  }, [searchParams, metadata.lastPage]);

  // sliding window array
  const pageNumbers = useMemo(() => {
    const total = metadata.lastPage;
    const current = currentPage;

    if (total <= 1) return [];

    const maxVisible = 5;
    let start = Math.max(1, current - Math.floor(maxVisible / 2));
    let end = Math.min(total, start + maxVisible - 1);

    // Adjust start boundary if overflow constraints apply near the final page
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    const pages: number[] = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }, [currentPage, metadata.lastPage]);

  const navigateToPage = (targetPage: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(PROPERTY_FILTER_ENUM.PAGE, targetPage.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  // If there's only 1 page or none, cleanly strip pagination nodes from rendering tree
  if (metadata.lastPage <= 1) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-16 select-none">
      <div className="flex items-center gap-2">
        {/* Prev Button */}
        <Button
          disabled={currentPage <= 1}
          onClick={() => navigateToPage(currentPage - 1)}
          variant="outline"
          size="sm"
          className="brand-color font-medium cursor-pointer"
        >
          Prev
        </Button>

        {/* First Page Left Ellipsis Cap */}
        {pageNumbers[0] > 1 && (
          <>
            <Button
              size="sm"
              variant="outline"
              onClick={() => navigateToPage(1)}
              className="cursor-pointer"
            >
              1
            </Button>
            {pageNumbers[0] > 2 && (
              <span className="text-slate-400 px-1 text-sm font-medium">
                ...
              </span>
            )}
          </>
        )}

        {/* Dynamic Window Track Loop */}
        {pageNumbers.map((p) => (
          <Button
            key={p}
            size="sm"
            variant="outline"
            onClick={() => navigateToPage(p)}
            className={cn(
              "font-medium transition-all duration-200 cursor-pointer min-w-9",
              currentPage === p &&
                "bg-blue-600 text-white hover:bg-blue-700 hover:text-white border-blue-600 shadow-xs",
            )}
          >
            {p}
          </Button>
        ))}

        {/* Last Page Right Ellipsis Cap */}
        {pageNumbers[pageNumbers.length - 1] < metadata.lastPage && (
          <>
            {pageNumbers[pageNumbers.length - 1] < metadata.lastPage - 1 && (
              <span className="text-slate-400 px-1 text-sm font-medium">
                ...
              </span>
            )}
            <Button
              size="sm"
              variant="outline"
              onClick={() => navigateToPage(metadata.lastPage)}
              className="cursor-pointer"
            >
              {metadata.lastPage}
            </Button>
          </>
        )}

        {/* Next Button */}
        <Button
          disabled={currentPage >= metadata.lastPage}
          onClick={() => navigateToPage(currentPage + 1)}
          variant="outline"
          size="sm"
          className="brand-color font-medium cursor-pointer"
        >
          Next
        </Button>
      </div>

      <span className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
        Page {currentPage} of {metadata.lastPage}
      </span>
    </div>
  );
};

const Pagination = (props: PropsType) => {
  return (
    <Suspense
      fallback={
        <div className="h-10 w-full max-w-sm animate-pulse bg-slate-100 rounded-lg mx-auto mt-16 border border-slate-50" />
      }
    >
      <PaginationInner {...props} />
    </Suspense>
  );
};

export default Pagination;
