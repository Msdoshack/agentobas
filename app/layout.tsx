import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import "next-cloudinary/dist/cld-video-player.css";

import QueryProvider from "@/lib/providers/QueryProvider";
import { Toaster } from "react-hot-toast";
// import ScrollToTop from "@/components/ScrollToTop";
import { TransitionProvider } from "./Providers/TransitionProvider";
import DoorOverlay from "@/components/DoorOverlay";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IG OBAS - Real estate agent",
  description: "IG OBAS - Best Real estate agent in abraka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TransitionProvider>
          <DoorOverlay />
          <QueryProvider>
            {/* <ScrollToTop /> */}
            <Toaster />
            <Navbar />
            {children}
            <Footer />
          </QueryProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
