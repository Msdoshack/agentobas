"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DoorComponent from "@/components/DoorComponent";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState<
    "idle" | "exit" | "key-turn" | "door-open" | "enter"
  >("idle");

  // Trigger transition on pathname change
  useEffect(() => {
    setIsTransitioning(true);
    setTransitionPhase("exit");

    setTimeout(() => setTransitionPhase("key-turn"), 400);
    setTimeout(() => setTransitionPhase("door-open"), 800);
    setTimeout(() => setTransitionPhase("enter"), 1200);
    setTimeout(() => {
      setTransitionPhase("idle");
      setIsTransitioning(false);
    }, 1600);
  }, [pathname]);

  return (
    <div className="relative">
      {/* Page Content */}
      <div
        className={`transition-all duration-500 ${
          transitionPhase === "exit"
            ? "scale-95 opacity-0"
            : "scale-100 opacity-100"
        } ${transitionPhase === "enter" ? "scale-95" : ""}`}
      >
        {children}
      </div>

      {/* Door Transition Overlay */}
      {isTransitioning && <DoorComponent transitionPhase={transitionPhase} />}
    </div>
  );
}
