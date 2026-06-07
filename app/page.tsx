export const revalidate = 3600;
export const dynamic = "force-static";

import Dividers from "@/components/Dividers";
import Body from "@/components/home/Body";
import Hero from "@/components/home/Hero";
import LandDeals from "@/components/home/LandDeals";
import RecentListing from "@/components/home/RecentListing";
import RecentVacancies from "@/components/home/RecentVacancies";
import PageReady from "@/components/PageReady";
import PromoBanner from "@/components/PromoBanner";
import PropertyListSkeleton from "@/components/properties/PropertyListSkeleton";
import TransitionLink from "@/components/TransitionLink";
import {
  PROPERTY_CATEGORY_ENUM,
  PROPERTY_FILTER_ENUM,
  URLS,
} from "@/constants/enum";
import { Suspense } from "react";

export default function Home() {
  // export const revalidate = 86400;
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

          <div className=" max-w-6xl mx-auto px-1 shadow-xl">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="font-medium sm:text-xl text-gray-700 ">
                Recent Listing
              </h3>
              <TransitionLink
                href={URLS.propertiesPage}
                className=" text-gray-700 text-sm"
              >
                View all
              </TransitionLink>
            </div>
            <Suspense fallback={<PropertyListSkeleton isGrid={false} />}>
              <RecentListing />
            </Suspense>
          </div>

          <Dividers
            linkTitle="    Explore land deals"
            link={`${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=land`}
            img="/land.jpeg"
            title="Premium Land, Prime Locations"
            sub="Discover verified plots with exceptional investment yields. Secure your future today"
          />

          <div className="max-w-6xl mx-auto px-1 shadow-xl">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="font-medium  text-gray-700 ">Land Deals</h3>
              <TransitionLink
                href={`${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=${PROPERTY_CATEGORY_ENUM.LAND}`}
                className=" text-gray-700 text-sm"
              >
                View all
              </TransitionLink>
            </div>

            <Suspense fallback={<PropertyListSkeleton isGrid={false} />}>
              <LandDeals />
            </Suspense>
          </div>

          <Dividers
            title="Find Your Next Home"
            sub="Inspect fully vetted apartments and bedsitters with transparent pricing and clear utility setups"
            linkTitle="Explore houses"
            img="/home-image-800.webp"
            link={`${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=house`}
          />

          <div className=" max-w-6xl mx-auto px-1 shadow-xl">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="font-medium  text-gray-700 ">Recent Vacancies</h3>
              <TransitionLink
                href={`${URLS.propertiesPage}?${PROPERTY_FILTER_ENUM.CATEGORY}=${PROPERTY_CATEGORY_ENUM.LAND}`}
                className=" text-gray-700 text-sm"
              >
                View all
              </TransitionLink>
            </div>

            <Suspense fallback={<PropertyListSkeleton isGrid={false} />}>
              <RecentVacancies />
            </Suspense>
          </div>

          <Body />
        </main>
      </div>
    </>
  );
}
