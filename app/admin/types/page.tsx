import Heading from "@/components/admin/Heading";
import TypeTable from "@/components/admin/types/TypeTable";

const page = () => {
  return (
    <div className="py-8 w-full">
      <div className="max-w-4xl mx-auto">
        <Heading name="All types" />

        <TypeTable />
      </div>
    </div>
  );
};

export default page;
