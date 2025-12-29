import SideBar from "@/components/admin/SideBar";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex ">
      <Toaster />
      <div className="w-3/12 lg:w-2/12 bg-gray-100 h-screen sticky top-0 left-0">
        <SideBar />
      </div>
      <div className="w-9/12 lg:w-10/12">{children}</div>
    </div>
  );
};

export default layout;
