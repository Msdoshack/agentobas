import CategoryTable from "@/components/admin/categories/categoryTable";
import Heading from "@/components/admin/Heading";

const page = () => {
  return (
    <div className="py-8 w-full">
      <div className="max-w-4xl mx-auto">
        <Heading name="All Categories" />

        <CategoryTable />
      </div>
    </div>
  );
};

export default page;
