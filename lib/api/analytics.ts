import { AnalyticsResponse } from "@/types/analytics";
import { apiClient } from "./client";

export const analyticsApi = {
  trackActivity: async () => {
    return apiClient.post("/analytics/track");
  },

  getAnalyticsMetrics: async (): Promise<AnalyticsResponse> => {
    return apiClient.get("/analytics/overview", { cache: "no-store" });
  },
};
