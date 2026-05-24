import Heading from "@/components/admin/Heading";
import AddTypeForm from "@/components/admin/listingtypes/AddTypeForm";
import GoBackBtn from "@/components/GoBackBtn";

const page = () => {
  return (
    <div className="py-8 w-full">
      <GoBackBtn />
      <div className="max-w-2xl mx-auto">
        <Heading name="Add types" />

        <AddTypeForm />
      </div>
    </div>
  );
};

export default page;
