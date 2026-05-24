import AddCategoryForm from "@/components/admin/categories/AddCategoryForm";
import Heading from "@/components/admin/Heading";
import GoBackBtn from "@/components/GoBackBtn";

const page = () => {
  return (
    <div className="py-8 w-full">
      <GoBackBtn />
      <div className="max-w-2xl mx-auto">
        <Heading name="Add Category" />

        <AddCategoryForm />
      </div>
    </div>
  );
};

export default page;
