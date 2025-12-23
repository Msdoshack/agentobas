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
