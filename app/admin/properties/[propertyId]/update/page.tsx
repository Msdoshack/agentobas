import Heading from "@/components/admin/Heading";
import UpdatePropertyForm from "@/components/admin/properties/UpdatePropertyForm";
import PageReady from "@/components/PageReady";
import { categoriesApi } from "@/lib/api/categories";
import { listingTypesApi } from "@/lib/api/listingTypes";
import { locationsApi } from "@/lib/api/locations";
import { propertiesApi } from "@/lib/api/properties";

const page = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const propertyId = (await params)?.propertyId;
  const property = await propertiesApi.get(propertyId);
  const locations = await locationsApi.getAll();
  const categories = await categoriesApi.getAll();
  const listingTypes = await listingTypesApi.getAll();
  return (
    <>
      <PageReady />
      <div className="py-8">
        <div className="max-w-5xl mx-auto">
          <Heading name="Update Property" />
          <UpdatePropertyForm
            property={property.data}
            listingTypes={listingTypes.data}
            locations={locations.data}
            categories={categories.data}
          />
        </div>
      </div>
    </>
  );
};

export default page;
