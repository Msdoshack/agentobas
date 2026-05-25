import AddLocationForm from "@/components/admin/locations/AddLocationForm";
import Heading from "@/components/admin/Heading";
import GoBackBtn from "@/components/GoBackBtn";
import PageReady from "@/components/PageReady";

const page = () => {
  return (
    <>
      <PageReady />
      <div className="py-8 w-full">
        <GoBackBtn />
        <div className="max-w-2xl mx-auto">
          <Heading name="Add Location" />

          <AddLocationForm />
        </div>
      </div>
    </>
  );
};

export default page;
