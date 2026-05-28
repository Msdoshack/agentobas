import PropertyCard from "../properties/PropertyCard";

import { propertiesApi } from "@/lib/api/properties";

const RecentVacancies = async () => {
  const properties = await propertiesApi.getAll({
    category: "house",
    limit: "10",
    listingType: "rent",
    sort: "-created_at",
  });

  return (
    <div className="flex overflow-x-scroll gap-4 sm:gap-6">
      {properties.data.map((item) => (
        <PropertyCard isGrid={false} property={item} key={item.id} />
      ))}
    </div>
  );
};

export default RecentVacancies;
