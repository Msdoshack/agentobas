"use client";

import SignoutButton from "../admin/SignoutButton";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronRight, Landmark } from "lucide-react";
import { adminNavMenu } from "@/constants";
import { URLS } from "@/constants/enum";
import { motion } from "motion/react";
import { RefObject } from "react";
import { usePathname, useRouter } from "next/navigation";

type PropsType = {
  ref: RefObject<HTMLDivElement | null>;
  onClose: () => void;
};

const MobileAdminNav = ({ ref, onClose }: PropsType) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
    onClose();
  };
  return (
    <motion.div
      className="fixed top-0 left-0 w-full flex md:hidden justify-end h-screen overflow-hidden z-50 bg-black/70 "
      initial={{ x: "100%" }}
      animate={{
        x: "0",
        transition: {
          duration: 0.3,
        },
      }}
      exit={{
        x: "100%",
        transition: {
          duration: 0.3,
        },
      }}
    >
      <div
        ref={ref}
        className="w-5/8 bg-gray-900 text-white flex flex-col overflow-y-scroll"
      >
        <div className="pb-5">
          <div className="px-5 py-2  font-bold text-green-700  text-lg sticky top-0 flex flex-col  border-b  bg-gray-100 gap-1">
            Admin Panel <SignoutButton />
          </div>

          <div className="py-5 border-b hover:bg-gray-800/40 px-4 mb-5">
            <button
              onClick={() => handleClick(URLS.adminPage)}
              className="flex items-center gap-4 text-base"
            >
              <Landmark size={18} /> Dashboard
            </button>
          </div>

          {adminNavMenu.map((menu) => (
            <Collapsible
              defaultOpen
              className="group/collapsible mb-4"
              key={menu.id}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full font-medium hover:bg-gray-800/40 p-2 px-4">
                {menu.name}
                <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>

              <CollapsibleContent className="flex flex-col ">
                {menu.children.map((item) => (
                  <button
                    onClick={() => handleClick(item.href)}
                    key={item.id}
                    className="p-2 px-8 flex items-center gap-2 hover:bg-gray-800/40"
                  >
                    <item.icon size={18} />
                    {item.name}
                  </button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileAdminNav;
