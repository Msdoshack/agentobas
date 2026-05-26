"use client";
import { navMenu } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { RefObject, useTransition } from "react";
import { motion } from "motion/react";
// Import your layout context hook
import { usePageTransition } from "@/app/Providers/TransitionProvider";

type PropsType = {
  ref: RefObject<HTMLDivElement | null>;
  onClose: () => void;
  isAuthenticated: boolean;
};

const MobileNavModal = ({ ref, onClose, isAuthenticated }: PropsType) => {
  const router = useRouter();

  // 1. Initialize the transition states
  const [isPending, startTransition] = useTransition();
  const { startClosing } = usePageTransition();
  const pathname = usePathname();

  const handleNavClick = (url: string) => {
    const targetPathname = new URL(url, window.location.origin).pathname;

    const isSamePage = targetPathname === pathname;

    if (!isSamePage) {
      startClosing();
    }

    onClose();

    startTransition(() => {
      router.push(url);
    });
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full flex justify-end h-screen overflow-hidden z-50 bg-black/70 "
      initial={{ x: "100%" }}
      animate={{
        x: "0",
        transition: {
          duration: 0.3,
        },
      }}
      exit={{
        x: "100%",
        transition: {
          duration: 0.3,
        },
      }}
    >
      <div ref={ref} className="w-4/8 bg-gray-900 text-white flex flex-col">
        <div className="text-center p-3 bg-white text-gray-900">
          <p className="text-xl font-extrabold">IG OBAS</p>

          <p className="text-base text-green-600">Menu</p>
        </div>

        {navMenu.map((item) => (
          <p
            key={item.id}
            // Swap to use the new wrapped transitions router handler
            onClick={() => handleNavClick(item.url)}
            className="p-5 hover:bg-gray-900 hover:text-white hover:font-medium text-center border-b cursor-pointer"
          >
            {item.name}
          </p>
        ))}

        {isAuthenticated && (
          <p
            onClick={() => handleNavClick("/admin")}
            className="p-5 text-green-600 hover:bg-gray-900 hover:text-white hover:font-medium text-center border-b cursor-pointer"
          >
            Admin
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default MobileNavModal;
