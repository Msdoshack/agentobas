import Heading from "@/components/admin/Heading";
import AddPropertyForm from "@/components/admin/properties/AddPropertyForm";
import GoBackBtn from "@/components/GoBackBtn";
import PageReady from "@/components/PageReady";
import { categoriesApi } from "@/lib/api/categories";
import { listingTypesApi } from "@/lib/api/listingTypes";
import { locationsApi } from "@/lib/api/locations";

const page = async () => {
  const locations = await locationsApi.getAll();
  const categories = await categoriesApi.getAll();
  const listingTypes = await listingTypesApi.getAll();
  return (
    <>
      <PageReady />
      <div className="w-full py-8 pb-32">
        <GoBackBtn />
        <div className="max-w-6xl mx-auto">
          <Heading name="Add Property" />
          <AddPropertyForm
            locations={locations?.data}
            categories={categories?.data}
            listingTypes={listingTypes?.data}
          />
        </div>
      </div>
    </>
  );
};

export default page;
