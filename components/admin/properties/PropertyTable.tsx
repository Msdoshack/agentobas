import { columns } from "@/app/admin/properties/columns";
import { DataTable } from "@/app/admin/properties/data-table";
import { propertiesApi } from "@/lib/api/properties";

const PropertyTable = async () => {
  const properties = await propertiesApi.getAll();
  return <DataTable columns={columns} data={properties.data} />;
};

export default PropertyTable;
