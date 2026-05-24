import DashboardDetails from "@/components/admin/DashboardDetails";

const page = () => {
  return (
    <div className="h-screen overflow-y-scroll pt-2  mb-32">
      <h1 className="text-2xl font-semibold text-gray-700 dark:text-neutral-100 p-5">
        Dashboard Overview
      </h1>
      <DashboardDetails />
    </div>
  );
};

export default page;
