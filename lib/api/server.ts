const getApiUrl = () => {
  if (typeof window !== "undefined") {
    // Client-side: use proxy
    return "/api/backend";
  }
  // Server-side: hit Render directly
  return process.env.API_URL ?? "https://ig-obas-api.onrender.com/api/v1";
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? getApiUrl();

export class ApiServer {
  private baseURL: string;

  constructor(baseURL: string = API_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    cookieHeader: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestInit = {
      ...options,
      credentials: "include", // Important: Send cookies
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader,
        ...options.headers,
      },
      //   cache:"no-store"
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      const error = await response.json().catch(() => ({
        error: "An error occurred",
      }));
      throw new Error(JSON.stringify(error.error));
    }

    return response.json();
  }

  async get<T>(
    endpoint: string,
    cookieHeader: string,
    options?: RequestInit,
  ): Promise<T> {
    return this.request<T>(endpoint, cookieHeader, {
      ...options,
      method: "GET",
    });
  }
}

export const apiServer = new ApiServer();
