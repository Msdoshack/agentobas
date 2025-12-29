import Heading from "@/components/admin/Heading";
import AddTypeForm from "@/components/admin/types/AddTypeForm";

const page = () => {
  return (
    <div className="py-8 w-full">
      <div className="max-w-4xl mx-auto">
        <Heading name="Add types" />

        <AddTypeForm />
      </div>
    </div>
  );
};

export default page;
