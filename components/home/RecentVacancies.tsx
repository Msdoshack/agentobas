import PropertyCard from "../properties/PropertyCard";
import { propertiesApi } from "@/lib/api/properties";

import {
  PROPERTY_CATEGORY_ENUM,
  PROPERTY_FILTER_ENUM,
  URLS,
} from "@/constants/enum";

import TransitionLink from "../TransitionLink";

const RecentVacancies = async () => {
  const properties = await propertiesApi.getAll({
    category: "house",
    limit: "10",
    listingType: "rent",
    sort: "-created_at",
  });

  return (
    properties.data &&
    properties.data.length > 0 && (
      <div className=" max-w-6xl mx-auto px-1 shadow-xl">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="font-medium  text-gray-700 ">Recent Vacancies</h3>
          <TransitionLink
            href={`${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=${PROPERTY_CATEGORY_ENUM.LAND}`}
            className=" text-gray-700 text-sm hover:text-blue-500 transition-colors"
          >
            View all
          </TransitionLink>
        </div>
        <div className="flex overflow-x-scroll gap-4 sm:gap-6">
          {properties.data.map((item) => (
            <PropertyCard isGrid={false} property={item} key={item.id} />
          ))}
        </div>
      </div>
    )
  );
};

export default RecentVacancies;
