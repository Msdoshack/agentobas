import Heading from "@/components/admin/Heading";
import AddTypeForm from "@/components/admin/listingtypes/AddTypeForm";
import AddPermissionForm from "@/components/admin/permissions/AddPermissionForm";
import GoBackBtn from "@/components/GoBackBtn";
import PageReady from "@/components/PageReady";

const page = () => {
  return (
    <>
      <PageReady />
      <div className="py-8 w-full">
        <GoBackBtn />
        <div className="max-w-2xl mx-auto">
          <Heading name="Add Permission" />

          <AddPermissionForm />
        </div>
      </div>
    </>
  );
};

export default page;
