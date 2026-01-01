import Link from "next/link";
import PropertyCard from "../properties/PropertyCard";
import {
  PROPERTY_CATEGORY_ENUM,
  PROPERTY_FILTER_ENUM,
  URLS,
} from "@/constants/enum";
import { properties } from "@/constants";

const LandDeals = () => {
  return (
    <div className="mt-16 max-w-6xl mx-auto px-1">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="font-medium text-lg sm:text-xl text-gray-700 ">
          Land Deals
        </h3>
        <Link
          href={`${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=${PROPERTY_CATEGORY_ENUM.LAND}`}
          className=" text-gray-700"
        >
          View all
        </Link>
      </div>

      <div className="flex overflow-x-scroll gap-4 sm:gap-6">
        {properties.map((item) => (
          <PropertyCard isGrid={false} property={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default LandDeals;
