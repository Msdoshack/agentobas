import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { adminNavMenu } from "@/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="py-5 px-2">
      {adminNavMenu.map((menu) => (
        <Collapsible
          defaultOpen
          className="group/collapsible mb-5"
          key={menu.id}
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full font-medium hover:bg-slate-50 p-2">
            {menu.name}
            <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>

          <CollapsibleContent className="flex flex-col">
            {menu.children.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="p-2 flex items-center gap-2 hover:bg-slate-50"
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default SideBar;
