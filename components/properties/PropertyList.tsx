import { properties } from "@/constants";
import Pagination from "../Pagination";

import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 xl:px-0 pb-32">
      <div className="my-8">
        <p className="text-blue-800 font-semibold">
          {properties.length}
          {properties.length === 1 ? " property" : " properties"} found
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-2 gap-y-6 sm:gap-6">
        {properties.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>
      <Pagination totalPages={1} />
    </div>
  );
};

export default PropertyList;
