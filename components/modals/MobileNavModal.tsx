"use client";
import { navMenu } from "@/constants";
import { useRouter } from "next/navigation";
import { RefObject } from "react";
import { motion } from "motion/react";

type PropsType = {
  ref: RefObject<HTMLDivElement | null>;
  onClose: () => void;
};

const MobileNavModal = ({ ref, onClose }: PropsType) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
    onClose();
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
    >
      <div ref={ref} className="w-4/8 bg-white text-black flex flex-col pt-4">
        {navMenu.map((item) => (
          <p
            key={item.id}
            onClick={() => handleClick(item.url)}
            className="p-5 hover:bg-gray-900 hover:text-white hover:font-medium text-center border-b"
          >
            {item.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileNavModal;
