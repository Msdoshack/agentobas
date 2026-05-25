import Heading from "@/components/admin/Heading";
import PropertyTable from "@/components/admin/properties/PropertyTable";
import PageReady from "@/components/PageReady";
import { URLS } from "@/constants/enum";

const page = () => {
  return (
    <>
      <PageReady />
      <div className="py-8 w-full min-h-screen">
        <div className="max-w-5xl mx-auto">
          <Heading name="All Properties" link={URLS.addPropertyPage} />
          <PropertyTable />
        </div>
      </div>
    </>
  );
};

export default page;
