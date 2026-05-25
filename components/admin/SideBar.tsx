"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { adminNavMenu } from "@/constants";
import { URLS } from "@/constants/enum";
import { ChevronRight, Landmark } from "lucide-react";
import Link from "next/link";
import SignoutButton from "./SignoutButton";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import TransitionLink from "../TransitionLink";

const SideBar = () => {
  const href = usePathname();

  return (
    <div className="pb-5">
      <div
        className={cn(
          "p-5 pt-3  font-bold text-green-700  text-lg sticky top-0 flex flex-col  border-b  bg-gray-100 gap-1 z-10",
        )}
      >
        Admin Panel <SignoutButton />
      </div>
      <div
        className={cn(
          "py-5 px-4 border-b hover:bg-gray-50",
          href == "/admin" && "bg-slate-50",
        )}
      >
        <TransitionLink
          className="flex items-center gap-4 text-base"
          href={URLS.adminPage}
        >
          <Landmark size={18} /> Dashboard
        </TransitionLink>
      </div>

      {adminNavMenu.map((menu) => (
        <Collapsible
          defaultOpen
          className="group/collapsible mb-2"
          key={menu.id}
        >
          <CollapsibleTrigger
            className={cn(
              "flex items-center justify-between w-full font-medium hover:bg-slate-50 p-2 px-4",
            )}
          >
            {menu.name}
            <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>

          <CollapsibleContent className="flex flex-col">
            {menu.children.map((item) => (
              <TransitionLink
                key={item.id}
                href={item.href}
                className={cn(
                  "p-2 px-8 flex items-center gap-2 hover:bg-slate-50",
                  href == item.href && "bg-slate-50",
                )}
              >
                <item.icon size={18} />
                {item.name}
              </TransitionLink>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default SideBar;
