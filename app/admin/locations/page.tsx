import LocationTable from "@/components/admin/locations/locationTable";
import Heading from "@/components/admin/Heading";
import { URLS } from "@/constants/enum";
import PageReady from "@/components/PageReady";

const page = () => {
  return (
    <>
      <PageReady />
      <div className="py-8 w-full h-screen overflow-y-scroll hide-scrollbar">
        <div className="max-w-4xl mx-auto">
          <Heading name="All Locations" link={URLS.addLocationPage} />

          <LocationTable />
        </div>
      </div>
    </>
  );
};

export default page;
