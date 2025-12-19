"use client";
import { PROPERT_CATEGORIES, PROPERTY_TYPE } from "@/constants";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  PROPERTY_CATEGORY_ENUM,
  PROPERTY_FILTER_ENUM,
  PROPERTY_TYPE_ENUM,
} from "@/constants/enum";

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filterCategory = searchParams.get(PROPERTY_FILTER_ENUM.CATEGORY) ?? "";

  const filterType =
    (searchParams.get(PROPERTY_FILTER_ENUM.TYPE) as PROPERTY_TYPE_ENUM) ??
    PROPERTY_TYPE_ENUM.ALL;

  const handleType = (type: PROPERTY_TYPE_ENUM) => {
    const params = new URLSearchParams(searchParams);

    if (type === PROPERTY_TYPE_ENUM.ALL) {
      params.delete(PROPERTY_FILTER_ENUM.TYPE);
      router.push(`${pathname}?${params.toString()}`);
    } else {
      params.set(PROPERTY_FILTER_ENUM.TYPE, type);
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  const handleCategory = (category: PROPERTY_CATEGORY_ENUM) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === PROPERTY_CATEGORY_ENUM.ALL) {
      params.delete(PROPERTY_FILTER_ENUM.CATEGORY);
      router.push(`${pathname}?${params.toString()}`);
    } else {
      params.set(PROPERTY_FILTER_ENUM.CATEGORY, category);
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mt-8 flex-wrap gap-4 px-2 max-w-6xl mx-auto">
        <div className="flex gap-3 flex-wrap">
          {PROPERTY_TYPE.map((type) => (
            <button
              key={type}
              onClick={() => handleType(type as PROPERTY_TYPE_ENUM)}
              className={cn(
                "py-3 px-6 rounded-md font-semibold border-none transition-all",
                filterType === type
                  ? "bg-linear-to-r from-[#2563eb] to-[#1d4ed8]"
                  : "bg-white",
                filterType === type ? "text-white" : "text-neutral-600",

                filterType === type ? "shadow-lg" : "none"
              )}
            >
              {type === "all"
                ? "All Properties"
                : type === "sale"
                ? "For Sale"
                : "For Rent"}
            </button>
          ))}
        </div>

        <Select
          onValueChange={(e) => handleCategory(e as PROPERTY_CATEGORY_ENUM)}
          defaultValue={filterCategory}
        >
          <SelectTrigger className="w-45 py-5! capitalize">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>

              {PROPERT_CATEGORIES.map((item) => (
                <SelectItem key={item} value={item} className="capitalize">
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
