import Heading from "@/components/admin/Heading";
import PropertyTable from "@/components/admin/properties/PropertyTable";

const page = () => {
  return (
    <div className="py-8 w-full">
      <div className="max-w-5xl mx-auto">
        <Heading name="All Properties" />
        <PropertyTable />
      </div>
    </div>
  );
};

export default page;
