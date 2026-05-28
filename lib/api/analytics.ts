import { AnalyticsResponse } from "@/types/analytics";
import { apiClient } from "./client";
import { apiServer } from "./server";

export const analyticsApi = {
  trackActivity: async () => {
    return apiClient.post("/analytics/track");
  },

  getAnalyticsMetrics: async (cookie: string): Promise<AnalyticsResponse> => {
    return apiServer.get("/analytics/overview", cookie, { cache: "no-store" });
  },
};
