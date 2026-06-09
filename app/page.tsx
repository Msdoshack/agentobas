export const revalidate = 86400;
export const dynamic = "force-static";
import Body from "@/components/home/Body";
import Hero from "@/components/home/Hero";
import LandDeals from "@/components/home/LandDeals";
import RecentListing from "@/components/home/RecentListing";
import RecentVacancies from "@/components/home/RecentVacancies";
import PageReady from "@/components/PageReady";
import PromoBanner from "@/components/PromoBanner";
import PropertyListSkeleton from "@/components/properties/PropertyListSkeleton";

import { Suspense } from "react";

export default function Home() {
  // export const revalidate = 3600;
  return (
    <>
      <PageReady />
      <div className="min-h-screen">
        <main>
          <Hero />

          <PromoBanner
            title="premium Properties in abraka"
            sub="Explore available homes, apartments and shops and residential / commercial plots ready for immediate development."
          />

          {/* Recent Listing */}
          <Suspense fallback={<PropertyListSkeleton isGrid={false} />}>
            <RecentListing />
          </Suspense>

          {/* Land Deals */}
          <Suspense fallback={<PropertyListSkeleton isGrid={false} />}>
            <LandDeals />
          </Suspense>

          {/* Recent Vacancies */}
          <Suspense fallback={<PropertyListSkeleton isGrid={false} />}>
            <RecentVacancies />
          </Suspense>

          <Body />
        </main>
      </div>
    </>
  );
}

//  <Dividers
//    linkTitle="    Explore land deals"
//    link={`${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=land`}
//    img="/land.jpeg"
//    title="Premium Land, Prime Locations"
//    sub="Discover verified plots with exceptional investment yields. Secure your future today"
//  />;

// <Dividers
//       title="Find Your Next Home"
//       sub="Inspect fully vetted apartments and bedsitters with transparent pricing and clear utility setups"
//       linkTitle="Explore houses"
//       img="/home-image-800.webp"
//       link={`${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=house`}
//     />
