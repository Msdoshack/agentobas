import PropertyCard from "../properties/PropertyCard";
import { propertiesApi } from "@/lib/api/properties";

const RecentListing = async () => {
  const properties = await propertiesApi.getAll({
    sort: "-created_at",
    limit: "10",
  });

  return (
    <div className="flex overflow-x-scroll gap-4">
      {properties.data.map((item) => (
        <PropertyCard isGrid={false} property={item} key={item.id} />
      ))}
    </div>
  );
};

export default RecentListing;
