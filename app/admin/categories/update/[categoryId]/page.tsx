import UpdateCategoryForm from "@/components/admin/categories/UpdateCategoryForm";
import Heading from "@/components/admin/Heading";
import { categoriesApi } from "@/lib/api/categories";

const page = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const fetchCategory = await categoriesApi.get(categoryId);

  return (
    <div className="py-8 w-full">
      <div className="max-w-2xl mx-auto">
        <Heading name="Update Category" />
        <UpdateCategoryForm category={fetchCategory?.data} />
      </div>
    </div>
  );
};

export default page;
