import { columns } from "@/app/admin/locations/columns";
import { DataTable } from "@/app/admin/locations/data-table";
import { locationsApi } from "@/lib/api/locations";

const LocationTable = async () => {
  const locations = await locationsApi.getAll();

  return <DataTable columns={columns} data={locations?.data!} />;
};

export default LocationTable;
