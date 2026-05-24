import Link from "next/link";
import MobileNavIcon from "./MobileNavIcon";
import Logo from "./home/Logo";
import { navDesktopMenu } from "@/constants";
import { cookies } from "next/headers";
const Navbar = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token")?.value;
  const isAuthenticated = !!authToken;

  return (
    <div className="bg-slate-900 p-4 text-white sticky top-0 z-30">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        <MobileNavIcon isAuthenticated={isAuthenticated} />

        <div className=" hidden md:flex text-base items-center gap-6">
          {navDesktopMenu.map((item) => (
            <Link
              className="hover:bg-white hover:text-gray-900 px-2 py-1.5 rounded-md transition-all duration-300"
              key={item.id}
              href={item.url}
            >
              {item.name}
            </Link>
          ))}

          {isAuthenticated && (
            <Link
              href={"/admin"}
              className="p-1 px-3 rounded-md border text-green-200 hover:bg-white 
              hover:text-gray-700 hover:font-medium hidden sm:block border-white transition-all duration-300"
            >
              Admin
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
