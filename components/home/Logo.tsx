"use client";
import { URLS } from "@/constants/enum";
import { usePathname } from "next/navigation";
import TransitionLink from "../TransitionLink";

const Logo = () => {
  const pathname = usePathname();
  const url =
    pathname === URLS.propertiesPage
      ? URLS.homePage
      : pathname.includes("admin") && pathname.split("/").length > 2
        ? URLS.adminPage
        : URLS.propertiesPage;

  return (
    <TransitionLink
      href={url}
      className="font-extrabold text-lg bg-linear-to-b from-amber-50 via-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-sm"
    >
      <h1>IG OBAS</h1>
    </TransitionLink>
  );
};

export default Logo;
