import Heading from "@/components/admin/Heading";
import UpdateTypeForm from "@/components/admin/listingtypes/UpdateTypeForm";
import GoBackBtn from "@/components/GoBackBtn";
import PageReady from "@/components/PageReady";
import { listingTypesApi } from "@/lib/api/listingTypes";

const page = async ({ params }: { params: Promise<{ typeId: string }> }) => {
  const typeId = (await params)?.typeId;

  const listingType = await listingTypesApi.get(typeId);

  return (
    <>
      <PageReady />
      <div className="py-8 w-full">
        <GoBackBtn />
        <div className="max-w-2xl mx-auto">
          <Heading name="Update Type" />
          <UpdateTypeForm listingType={listingType.data} />
        </div>
      </div>
    </>
  );
};

export default page;
