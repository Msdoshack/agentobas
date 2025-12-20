"use client";

import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Get hours in 12-hour format
  let hours = time.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Converts 0 to 12

  const displayHours = String(hours).padStart(2, "0");
  const displayMinutes = String(time.getMinutes()).padStart(2, "0");
  const displaySeconds = String(time.getSeconds()).padStart(2, "0");

  return (
    <div className="font-mono font-extrabold text-xl flex gap-1 items-center text-amber-500">
      <span>{displayHours}</span>:<span>{displayMinutes}</span>:
      <span>{displaySeconds}</span>
      <span className="ml-1">{ampm}</span>
    </div>
  );
};

export default Clock;
