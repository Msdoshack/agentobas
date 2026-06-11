import PropertyCard from "../properties/PropertyCard";
import { propertiesApi } from "@/lib/api/properties";
import TransitionLink from "../TransitionLink";
import { URLS } from "@/constants/enum";

const RecentListing = async () => {
  const properties = await propertiesApi.getAll({
    sort: "-created_at",
    limit: "10",
  });

  return (
    properties.data &&
    properties.data.length > 0 && (
      <>
        <div className=" max-w-6xl mx-auto px-1 shadow-xl">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="font-medium sm:text-xl text-gray-700 ">
              Recent Listings
            </h3>
            <TransitionLink
              href={URLS.propertiesPage}
              className=" text-gray-700 text-sm hover:text-blue-500 transition-colors"
            >
              View all
            </TransitionLink>
          </div>
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

export default RecentListing;
