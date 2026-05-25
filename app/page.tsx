import Body from "@/components/home/Body";
import Hero from "@/components/home/Hero";
import LandDeals from "@/components/home/LandDeals";
import RecentListing from "@/components/home/RecentListing";
import PageReady from "@/components/PageReady";

export default function Home() {
  return (
    <>
      <PageReady />
      <div className="min-h-screen">
        <main>
          <Hero />
          <RecentListing />

          <LandDeals />

          <Body />
        </main>
      </div>
    </>
  );
}
