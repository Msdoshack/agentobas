import Link from "next/link";
import PropertyCard from "../properties/PropertyCard";
import { URLS } from "@/constants/enum";
import { properties } from "@/constants";

const RecentListing = () => {
  return (
    <div className="mt-16 max-w-6xl mx-auto px-1">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="font-medium text-lg sm:text-xl text-gray-700 ">
          Recent Listing
        </h3>
        <Link href={URLS.propertiesPage} className=" text-gray-700">
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

export default RecentListing;
