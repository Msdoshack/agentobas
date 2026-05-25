import UpdateLocationForm from "@/components/admin/locations/UpdateLocationForm";
import Heading from "@/components/admin/Heading";
import { locationsApi } from "@/lib/api/locations";
import PageReady from "@/components/PageReady";

const page = async ({
  params,
}: {
  params: Promise<{ locationId: string }>;
}) => {
  const { locationId } = await params;
  const fetchCategory = await locationsApi.get(locationId);

  return (
    <>
      <PageReady />
      <div className="py-8 w-full px-4">
        <div className="max-w-2xl mx-auto px-4">
          <Heading name="Update Category" />
          <UpdateLocationForm location={fetchCategory?.data} />
        </div>
      </div>
    </>
  );
};

export default page;
