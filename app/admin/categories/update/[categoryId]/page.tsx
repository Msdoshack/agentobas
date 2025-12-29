import UpdateCategoryForm from "@/components/admin/categories/UpdateCategoryForm";
import Heading from "@/components/admin/Heading";

const page = () => {
  return (
    <div className="py-8 w-full">
      <div className="max-w-4xl mx-auto">
        <Heading name="Update Category" />
        <UpdateCategoryForm />
      </div>
    </div>
  );
};

export default page;
