import AddCategoryForm from "@/components/admin/categories/AddCategoryForm";
import Heading from "@/components/admin/Heading";

const page = () => {
  return (
    <div className="py-8 w-full">
      <div className="max-w-4xl mx-auto">
        <Heading name="Add Category" />

        <AddCategoryForm />
      </div>
    </div>
  );
};

export default page;
