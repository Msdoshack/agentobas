import Heading from "@/components/admin/Heading";
import UpdatePropertyForm from "@/components/admin/properties/UpdatePropertyForm";

const page = () => {
  return (
    <div className="py-8">
      <div className="max-w-5xl mx-auto">
        <Heading name="Update Property" />
        <UpdatePropertyForm />
      </div>
    </div>
  );
};

export default page;
