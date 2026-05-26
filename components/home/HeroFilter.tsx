import {
  PROPERTY_CATEGORY_ENUM,
  PROPERTY_FILTER_ENUM,
  URLS,
} from "@/constants/enum";
import { cn } from "@/lib/utils";

import TransitionLink from "../TransitionLink";

const menu = [
  {
    name: "Main",
    url: `${URLS.homePage}`,
  },
  {
    name: "All",
    url: `${URLS.propertiesPage}`,
  },
  {
    name: "Houses",
    url: `${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=${PROPERTY_CATEGORY_ENUM.HOUSE}`,
  },
  {
    name: "Lands",
    url: `${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=${PROPERTY_CATEGORY_ENUM.LAND}`,
  },
  // {
  //   name: "Shops",
  //   url: `${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=${PROPERTY_CATEGORY_ENUM.SHOP}`,
  // },
];

const HeroFilter = () => {
  return (
    <div className="my-8 bg-white  flex items-center gap-1 w-fit p-2">
      {menu.map((item, i) => (
        <TransitionLink
          key={i}
          className={cn(
            "py-2 px-4 sm:px-6 text-sm text-black hover:bg-slate-900 hover:text-white hover:font-medium no-underline!",
            i == 0 && "bg-slate-900 text-white font-medium",
          )}
          href={item.url}
        >
          {item.name}
        </TransitionLink>
      ))}
    </div>
  );
};

export default HeroFilter;
