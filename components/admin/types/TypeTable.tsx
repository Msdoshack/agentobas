"use client";
import { columns } from "@/app/admin/types/columns";
import { DataTable } from "@/app/admin/types/data-table";

const TypeTable = () => {
  return <DataTable columns={columns} />;
};

export default TypeTable;
