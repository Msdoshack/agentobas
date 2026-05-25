import Heading from "@/components/admin/Heading";
import UserTable from "@/components/admin/users/UserTable";
import PageReady from "@/components/PageReady";
import { URLS } from "@/constants/enum";

const page = () => {
  return (
    <>
      <PageReady />
      <div className="py-8 w-full">
        <div className="max-w-5xl mx-auto">
          <Heading name="All Users" link={URLS.addUserPage} />
          <UserTable />
        </div>
      </div>
    </>
  );
};

export default page;
