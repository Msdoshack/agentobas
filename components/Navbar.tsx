import Link from "next/link";
import MobileNavIcon from "./MobileNavIcon";
import Logo from "./home/Logo";
import { navDesktopMenu } from "@/constants";

const Navbar = () => {
  return (
    <div className="bg-slate-900 p-4 text-white sticky top-0 z-30">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {/* <MobileNavIcon /> */}

          <Logo />
        </div>

        <MobileNavIcon />

        <div className=" hidden sm:flex text-sm items-center gap-6">
          {navDesktopMenu.map((item) => (
            <Link
              className="hover:bg-white hover:text-gray-900 px-2 py-1.5 rounded-md transition-all duration-300"
              key={item.id}
              href={item.url}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href={"/admin"}
            className="p-1 px-3 rounded-md text-green-600 hover:bg-gray-700 hover:text-white hover:font-medium hidden sm:block bg-white transition-all duration-300"
          >
            Admin
          </Link>
        </div>

        {/* <div>
          <Button variant={"link"} className="text-white">
            Login
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
