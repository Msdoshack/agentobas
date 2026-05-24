import SideBar from "@/components/admin/SideBar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <div className="hidden md:block w-3/12 lg:w-2/12 bg-gray-100 h-screen sticky top-0 left-0 overflow-y-scroll hide-scrollbar">
        <SideBar />
      </div>
      <div className="w-full md:w-9/12 lg:w-10/12">{children}</div>
    </div>
  );
};

export default layout;
