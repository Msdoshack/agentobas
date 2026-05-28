"use client";

import { analyticsApi } from "@/lib/api/analytics";
import { useEffect, useRef } from "react";

export function AnalyticsTracker() {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    // if the 24-hour tracking cookie already exists
    const hasTrackingCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("ig_tracked_24h="));

    if (hasTrackingCookie) {
      console.debug("User tracked within the last 24 hours. Bypassing ping.");
      return;
    }

    // 3. Fire the activity ping to your Go backend
    analyticsApi
      .trackActivity()
      .then(() => {
        // On success, set a cookie that expires in exactly 24 hours
        const pinDurationInSeconds = 24 * 60 * 60; // 86,400 seconds

        document.cookie = `ig_tracked_24h=true; max-age=${pinDurationInSeconds}; path=/; SameSite=Strict; Secure`;
      })
      .catch((err) => {
        console.debug("Metrics collection ping bypassed:", err);
      });
  }, []);

  return null;
}
