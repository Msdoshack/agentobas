"use client";
import {
  PROPERTY_CATEGORY_ENUM,
  PROPERTY_FILTER_ENUM,
  URLS,
} from "@/constants/enum";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const menu = [
  {
    name: "House",
    url: `${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=${PROPERTY_CATEGORY_ENUM.HOUSE}`,
  },
  {
    name: "Lands",
    url: `${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=${PROPERTY_CATEGORY_ENUM.LAND}`,
  },
  {
    name: "Offices",
    url: `${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=${PROPERTY_CATEGORY_ENUM.OFFICE}`,
  },
  {
    name: "Shops",
    url: `${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=${PROPERTY_CATEGORY_ENUM.SHOP}`,
  },
];
const HeroFilter = () => {
  const router = useRouter();
  const [menuIdx, setMenuIdx] = useState(0);

  const handleMenuClick = (idx: number, url: string) => {
    setMenuIdx(idx);
    router.push(url);
  };
  return (
    <div className="my-8 bg-white  flex items-center w-fit p-1">
      {menu.map((item, i) => (
        <button
          key={i}
          className={cn(
            "py-1 px-4 sm:px-6 text-black rounded-none no-underline!",
            menuIdx === i && "bg-slate-900 text-white"
          )}
          onClick={() => handleMenuClick(i, item.url)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default HeroFilter;
