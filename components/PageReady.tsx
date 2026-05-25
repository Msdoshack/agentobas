"use client";

import { useEffect } from "react";

import { usePageTransition } from "@/app/Providers/TransitionProvider";

export default function PageReady() {
  const { startOpening } = usePageTransition();

  useEffect(() => {
    startOpening();
  }, [startOpening]);

  return null;
}
