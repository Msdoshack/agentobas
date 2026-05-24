"use client";
import { useEffect, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { PROPERTY_FILTER_ENUM } from "@/constants/enum";

type PropsType = {
  totalPages: number;
};

const PaginationInner = ({ totalPages }: PropsType) => {
  const [page, setPage] = useState(1);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // FIX #1: Safely cast read-only searchParams to string before initializing constructor
  const params = new URLSearchParams(searchParams.toString());

  const handleNext = () => {
    const nextPage = page + 1;
    if (nextPage <= totalPages) {
      params.set(PROPERTY_FILTER_ENUM.PAGE, nextPage.toString());
      router.replace(`${pathname}?${params}`);
    }
  };

  const handlePrev = () => {
    const prevPage = page - 1;
    if (prevPage >= 1) {
      params.set(PROPERTY_FILTER_ENUM.PAGE, prevPage.toString());
      router.replace(`${pathname}?${params}`);
    }
  };

  const handleNumberClick = (targetPage: string) => {
    params.set(PROPERTY_FILTER_ENUM.PAGE, targetPage);
    router.push(`${pathname}?${params}`);
  };

  const disablePrev = page <= 1;
  const disableNext = page >= totalPages;

  useEffect(() => {
    const currentPage =
      Number(searchParams.get(PROPERTY_FILTER_ENUM.PAGE)) || 1;
    setPage(currentPage);
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-16">
      <div className="flex items-center gap-4">
        <Button
          disabled={disablePrev}
          onClick={handlePrev}
          variant={"outline"}
          className="brand-color"
        >
          Prev
        </Button>

        {/* FIX #2: Compare against your verified 'page' state instead of 'currentPage' variable */}
        <Button
          size={"sm"}
          variant={"outline"}
          onClick={() => handleNumberClick("1")}
          className={cn(
            page === 1 && "bg-blue-600 text-white hover:text-white",
          )}
        >
          1
        </Button>

        {totalPages > 1 && (
          <Button
            className={cn(page === 2 && "brand-bg text-white hover:text-white")}
            size={"sm"}
            variant={"outline"}
            onClick={() => handleNumberClick("2")}
          >
            2
          </Button>
        )}

        {totalPages > 2 && (
          <Button
            className={cn(page === 3 && "brand-bg text-white hover:text-white")}
            size={"sm"}
            variant={"outline"}
            onClick={() => handleNumberClick("3")}
          >
            3
          </Button>
        )}

        {totalPages > 3 && (
          <Button
            className={cn(page === 4 && "brand-bg text-white hover:text-white")}
            size={"sm"}
            variant={"outline"}
            onClick={() => handleNumberClick("4")}
          >
            4
          </Button>
        )}
        {totalPages > 4 && (
          <Button
            className={cn(page === 5 && "brand-bg text-white hover:text-white")}
            size={"sm"}
            variant={"outline"}
            onClick={() => handleNumberClick("5")}
          >
            5
          </Button>
        )}

        {totalPages > 5 && (
          <span className="bg-white rounded-sm px-2 py-0.5">...</span>
        )}

        <Button
          disabled={disableNext}
          onClick={handleNext}
          variant={"outline"}
          className="brand-color"
        >
          Next
        </Button>
      </div>
      <span className="text-sm text-gray-600">
        Page {page} of {totalPages}
      </span>
    </div>
  );
};

const Pagination = (props: PropsType) => {
  return (
    <Suspense
      fallback={
        <div className="h-10 w-full max-w-md animate-pulse bg-gray-200 rounded-md mx-auto mt-16" />
      }
    >
      <PaginationInner {...props} />
    </Suspense>
  );
};

export default Pagination;
