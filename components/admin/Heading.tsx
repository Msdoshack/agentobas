"use client";
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TransitionLink from "../TransitionLink";

const Heading = ({ name, link }: { name: string; link?: string }) => {
  const pathname = usePathname();
  const isAddRoute = pathname.split("/").includes("add");

  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-2xl px-4">{name}</h1>
      {!isAddRoute && link && (
        <TransitionLink
          href={link}
          className="flex items-center bg-green-50  px-5 py-1 rounded-lg mx-4"
        >
          <Plus size={20} className="text-green-600" /> Add
        </TransitionLink>
      )}
    </div>
  );
};

export default Heading;
