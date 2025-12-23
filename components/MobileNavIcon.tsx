"use client";
import { Menu } from "lucide-react";
import MobileNavModal from "./modals/MobileNavModal";
import { AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";

const MobileNavIcon = () => {
  const [showNav, setShowNav] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

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
      <div className="sm:hidden">
        <Menu onClick={() => setShowNav(true)} />
      </div>
      <AnimatePresence>
        {showNav && <MobileNavModal ref={modalRef} onClose={onClose} />}
      </AnimatePresence>
    </>
  );
};

export default MobileNavIcon;
