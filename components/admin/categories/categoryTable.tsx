"use client";

import { columns } from "@/app/admin/categories/columns";
import { DataTable } from "@/app/admin/categories/data-table";

const CategoryTable = () => {
  return <DataTable columns={columns} />;
};

export default CategoryTable;
