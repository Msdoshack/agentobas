import { PropertyFilterParams } from "@/types/property";
import Pagination from "../Pagination";
import FilterHeading from "./FilterHeading";

import PropertyCard from "./PropertyCard";
import { propertiesApi } from "@/lib/api/properties";

type Props = {
  searchParams: PropertyFilterParams;
};
const PropertyList = async ({ searchParams }: Props) => {
  const properties = await propertiesApi.getAll(searchParams);

  return (
    <div className="max-w-7xl mx-auto px-2 xl:px-0 pb-32 ">
      <FilterHeading
        count={properties.metadata.totalRecords}
        searchParams={searchParams}
      />
      {properties.data.length > 0 ? (
        <div className="min-h-screen">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-2 gap-y-6 sm:gap-4">
            {properties.data.map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
          {properties.data.length > 0 && (
            <Pagination metadata={properties.metadata} />
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center text-gray-500 font-medium h-[50vh]">
          No Property Found
        </div>
      )}
    </div>
  );
};

export default PropertyList;
