import Body from "@/components/home/Body";
import Hero from "@/components/home/Hero";
import RecentListing from "@/components/home/RecentListing";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <RecentListing />
        <Body />
      </main>
    </div>
  );
}
