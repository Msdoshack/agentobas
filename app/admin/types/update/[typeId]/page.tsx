import Heading from "@/components/admin/Heading";
import UpdateTypeForm from "@/components/admin/types/UpdateTypeForm";

const page = () => {
  return (
    <div className="py-8 w-full">
      <div className="max-w-4xl mx-auto">
        <Heading name="Update Type" />
        <UpdateTypeForm />
      </div>
    </div>
  );
};

export default page;
