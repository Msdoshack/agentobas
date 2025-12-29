"use client";
import { columns } from "@/app/admin/columns";
import { DataTable } from "@/app/admin/data-table";

const PropertyTable = () => {
  return <DataTable columns={columns} />;
};

export default PropertyTable;
