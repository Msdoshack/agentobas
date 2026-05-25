"use client";

import { createContext, useContext, useState, useCallback } from "react";

type Phase = "idle" | "closing" | "closed" | "opening";

type TransitionContextType = {
  phase: Phase;
  startClosing: () => void;
  startOpening: () => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<Phase>("idle");

  const startClosing = useCallback(() => {
    setPhase("closing");

    // after close animation finishes
    setTimeout(() => {
      setPhase("closed");
    }, 700);
  }, []);

  const startOpening = useCallback(() => {
    setPhase("opening");

    setTimeout(() => {
      setPhase("idle");
    }, 700);
  }, []);

  return (
    <TransitionContext.Provider
      value={{
        phase,
        startClosing,
        startOpening,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const ctx = useContext(TransitionContext);

  if (!ctx) {
    throw new Error("usePageTransition must be used inside TransitionProvider");
  }

  return ctx;
}
