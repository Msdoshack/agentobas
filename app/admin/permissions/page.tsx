import Heading from "@/components/admin/Heading";
import PermissionTable from "@/components/admin/permissions/PermissionTable";
import PageReady from "@/components/PageReady";
import { URLS } from "@/constants/enum";

const page = () => {
  return (
    <>
      <PageReady />
      <div className="py-8 w-full h-screen overflow-y-scroll hide-scrollbar">
        <div className="max-w-4xl mx-auto">
          <Heading name="All Permissions" link={URLS.addPermissionPage} />

          <PermissionTable />
        </div>
      </div>
    </>
  );
};

export default page;
