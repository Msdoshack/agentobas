import Link from "next/link";
import MobileNavIcon from "./MobileNavIcon";
import Logo from "./home/Logo";

const Navbar = () => {
  return (
    <div className="bg-slate-900 p-4 text-white sticky top-0 z-30">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {/* <MobileNavIcon /> */}

          <Logo />
        </div>

        <MobileNavIcon />

        <Link
          href={"/admin"}
          className="p-1 px-3 rounded-md text-green-600 hover:bg-gray-900 hover:text-white hover:font-medium hidden md:block bg-white"
        >
          Admin
        </Link>

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
