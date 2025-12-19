import { Button } from "./ui/button";
import Link from "next/link";
import MobileNavIcon from "./MobileNavIcon";

const Navbar = () => {
  return (
    <div className="bg-slate-900 p-4 text-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <MobileNavIcon />

          <Link href={"/"} className="font-extrabold text-lg">
            IG OBAS
          </Link>
        </div>

        <div>
          <Button variant={"link"} className="text-white">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
