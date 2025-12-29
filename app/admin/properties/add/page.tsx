import Heading from "@/components/admin/Heading";
import AddPropertyForm from "@/components/admin/properties/AddPropertyForm";

const page = () => {
  return (
    <div className="w-full py-8 pb-32">
      <div className="max-w-6xl mx-auto">
        <Heading name="Add Property" />
        <AddPropertyForm />
      </div>
    </div>
  );
};

export default page;
