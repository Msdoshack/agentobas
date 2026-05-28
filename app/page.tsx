export const revalidate = 3600;
export const dynamic = "force-static";
import Body from "@/components/home/Body";
import Hero from "@/components/home/Hero";
import LandDeals from "@/components/home/LandDeals";
import RecentListing from "@/components/home/RecentListing";
import RecentVacancies from "@/components/home/RecentVacancies";
import PageReady from "@/components/PageReady";
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

          <div className="mt-16 max-w-6xl mx-auto px-1 shadow-xl">
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

          <div className="mt-16 max-w-6xl mx-auto px-1 shadow-xl">
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

          <div className="mt-16 max-w-6xl mx-auto px-1 shadow-xl">
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
