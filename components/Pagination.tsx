"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { PROPERTY_FILTER_ENUM } from "@/constants/enum";

type PropsType = {
  totalPages: number;
};

const Pagination = ({ totalPages }: PropsType) => {
  const [page, setPage] = useState(1);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

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

  const handleNumberClick = (page: string) => {
    params.set(PROPERTY_FILTER_ENUM.PAGE, page);
    router.push(`${pathname}?${params}`);
  };

  const disablePrev = page <= 1;
  const disableNext = page >= totalPages;

  const currentPage = params.get(PROPERTY_FILTER_ENUM.PAGE);

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

        <Button
          size={"sm"}
          variant={"outline"}
          onClick={() => handleNumberClick("1")}
          className={cn(
            currentPage === "1" && "bg-blue-600 text-white hover:text-white"
          )}
        >
          1
        </Button>

        {totalPages > 1 && (
          <Button
            className={cn(
              currentPage === "2" && "brand-bg text-white hover:text-white"
            )}
            size={"sm"}
            variant={"outline"}
            onClick={() => handleNumberClick("2")}
          >
            2
          </Button>
        )}

        {totalPages > 2 && (
          <Button
            className={cn(
              currentPage === "3" && "brand-bg text-white hover:text-white"
            )}
            size={"sm"}
            variant={"outline"}
            onClick={() => handleNumberClick("3")}
          >
            3
          </Button>
        )}

        {totalPages > 3 && (
          <Button
            className={cn(
              currentPage === "4" && "brand-bg text-white hover:text-white"
            )}
            size={"sm"}
            variant={"outline"}
            onClick={() => handleNumberClick("4")}
          >
            4
          </Button>
        )}
        {totalPages > 4 && (
          <Button
            className={cn(
              currentPage === "5" && "brand-bg text-white hover:text-white"
            )}
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

export default Pagination;
