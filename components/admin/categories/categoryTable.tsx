import { columns } from "@/app/admin/categories/columns";
import { DataTable } from "@/app/admin/categories/data-table";
import { categoriesApi } from "@/lib/api/categories";

const CategoryTable = async () => {
  const categories = await categoriesApi.getAll();

  return <DataTable columns={columns} data={categories?.data!} />;
};

export default CategoryTable;
