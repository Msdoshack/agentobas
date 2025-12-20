import Body from "@/components/home/Body";
import Hero from "@/components/home/Hero";
import RecentListing from "@/components/home/RecentListing";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <RecentListing />
        <Body />
      </main>
    </div>
  );
}
