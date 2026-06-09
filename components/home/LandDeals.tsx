import PropertyCard from "../properties/PropertyCard";
import { propertiesApi } from "@/lib/api/properties";

import { PROPERTY_FILTER_ENUM, URLS } from "@/constants/enum";
import Dividers from "../Dividers";

const LandDeals = async () => {
  const properties = await propertiesApi.getAll({
    category: "land",
    limit: "10",
  });

  return (
    properties.data &&
    properties.data.length > 0 && (
      <>
        <Dividers
          linkTitle="    Explore land deals"
          link={`${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=land`}
          img="/land.jpeg"
          title="Premium Land, Prime Locations"
          sub="Discover verified plots with exceptional investment yields. Secure your future today"
        />
        <div className="max-w-6xl mx-auto px-1 shadow-xl">
          {/* <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="font-medium  text-gray-700 ">Land Deals</h3>
            <TransitionLink
              href={`${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=${PROPERTY_CATEGORY_ENUM.LAND}`}
              className=" text-gray-700 text-sm"
            >
              View all
            </TransitionLink>
          </div> */}
          <div className="flex overflow-x-scroll gap-4">
            {properties.data.map((item) => (
              <PropertyCard isGrid={false} property={item} key={item.id} />
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default LandDeals;
