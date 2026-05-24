"use client";
import { URLS } from "@/constants/enum";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();
  const url =
    pathname === URLS.propertiesPage
      ? URLS.homePage
      : pathname.includes("admin") && pathname.split("/").length > 2
        ? URLS.adminPage
        : URLS.propertiesPage;

  return (
    <Link href={url} className="font-extrabold text-lg">
      IG OBAS
    </Link>
  );
};

export default Logo;
