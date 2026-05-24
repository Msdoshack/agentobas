// "use client";

// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";
// import { authApi } from "@/lib/api/auth";
// import type { User } from "@/types/user";

// interface AuthContextType {
//   user: User | null;
//   loading: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
//   refetch: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   const fetchUser = async () => {
//     try {
//       const response = await authApi.getCurrentUser();
//       setUser(response.user);
//     } catch (error) {
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const login = async (email: string, password: string) => {
//     const response = await authApi.login({ email, password });
//     setUser(response.user);
//   };

//   const logout = async () => {
//     await authApi.logout();
//     setUser(null);
//   };

//   const refetch = async () => {
//     setLoading(true);
//     await fetchUser();
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout, refetch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }
