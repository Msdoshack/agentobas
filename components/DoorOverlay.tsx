"use client";

import DoorComponent from "@/components/DoorComponent";
import { usePageTransition } from "@/app/Providers/TransitionProvider";
import UpdatedDoorComponent from "./UpdatedDoor";

export default function DoorOverlay() {
  const { phase } = usePageTransition();

  if (phase === "idle") return null;

  return (
    <div className="fixed inset-0 z-9999 pointer-events-none">
      <UpdatedDoorComponent transitionPhase={phase} />
    </div>
  );
}
