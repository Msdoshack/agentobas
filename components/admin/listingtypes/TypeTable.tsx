import { columns } from "@/app/admin/types/columns";
import { DataTable } from "@/app/admin/types/data-table";
import { listingTypesApi } from "@/lib/api/listingTypes";

const TypeTable = async () => {
  const listingType = await listingTypesApi.getAll();

  return <DataTable columns={columns} data={listingType.data} />;
};

export default TypeTable;
