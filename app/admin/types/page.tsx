import Heading from "@/components/admin/Heading";
import TypeTable from "@/components/admin/listingtypes/TypeTable";
import PageReady from "@/components/PageReady";
import { URLS } from "@/constants/enum";

const page = () => {
  return (
    <>
      <PageReady />
      <div className="py-8 w-full h-screen overflow-y-scroll hide-scrollbar">
        <div className="max-w-4xl mx-auto">
          <Heading name="All types" link={URLS.addTypePage} />

          <TypeTable />
        </div>
      </div>
    </>
  );
};

export default page;
