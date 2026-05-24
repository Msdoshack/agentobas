import CategoryTable from "@/components/admin/categories/categoryTable";
import Heading from "@/components/admin/Heading";
import { URLS } from "@/constants/enum";

const page = () => {
  return (
    <div className="py-8 w-full h-screen overflow-y-scroll hide-scrollbar">
      <div className="max-w-4xl mx-auto">
        <Heading name="All Categories" link={URLS.addCategoryPage} />

        <CategoryTable />
      </div>
    </div>
  );
};

export default page;
