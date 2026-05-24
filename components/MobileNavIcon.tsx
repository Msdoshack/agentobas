"use client";
import { Menu } from "lucide-react";
import MobileNavModal from "./modals/MobileNavModal";
import { AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import MobileAdminNav from "./modals/MobileAdminNav";

const MobileNavIcon = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const [showNav, setShowNav] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  const isAdminRoute = pathname.includes("/admin");

  const onClose = () => {
    setShowNav(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNav]);
  return (
    <>
      <div className="md:hidden">
        <Menu onClick={() => setShowNav(true)} />
      </div>
      <AnimatePresence>
        {showNav &&
          (isAdminRoute ? (
            <MobileAdminNav ref={modalRef} onClose={onClose} />
          ) : (
            <MobileNavModal
              ref={modalRef}
              onClose={onClose}
              isAuthenticated={isAuthenticated}
            />
          ))}
      </AnimatePresence>
    </>
  );
};

export default MobileNavIcon;
