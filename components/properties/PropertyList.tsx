import Pagination from "../Pagination";

import PropertyCard from "./PropertyCard";
import { propertiesApi } from "@/lib/api/properties";

type Props = {
  searchParams: {
    type?: string;
    category?: string;
    search?: string;
    location?: string;
    page?: string;
  };
};
const PropertyList = async ({ searchParams }: Props) => {
  const properties = await propertiesApi.getAll(searchParams);
  return (
    <div className="max-w-7xl mx-auto px-2 xl:px-0 pb-32 ">
      {properties.data.length > 0 ? (
        <div className="min-h-screen">
          <div className="my-8">
            <p className="text-blue-800 font-semibold">
              {properties.data.length}
              {properties.data.length === 1 ? " property" : " properties"} found
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-2 gap-y-6 sm:gap-4">
            {properties.data.map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
          {properties.data.length > 0 && <Pagination totalPages={1} />}
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
