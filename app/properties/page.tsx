import PageReady from "@/components/PageReady";
import Filter from "@/components/properties/Filter";
import PropertyList from "@/components/properties/PropertyList";
import SearchBox from "@/components/properties/SearchBox";
import Image from "next/image";
import { Suspense } from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    type?: string;
    category?: string;
    search?: string;
    location?: string;
    page?: string;
  }>;
}) => {
  const params = await searchParams;

  return (
    <>
      <PageReady />
      <div className=" bg-slate-50">
        <div className="relative w-full h-full  backdrop-blur-xs bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
          <Image
            fill
            src="/property.jpeg"
            alt="properties"
            className="object-cover opacity-5 -z-10"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div>
                <h1 className="text-2xl font-bold leading-tight">IG OBAS</h1>
                <p className="text-blue-200">
                  Your Trusted Real Estate Partner
                </p>
              </div>
            </div>

            {/* Search Box */}

            <SearchBox />
          </div>
        </div>

        <Filter />

        <Suspense fallback={"loading..."}>
          <PropertyList searchParams={params} />
        </Suspense>
      </div>
    </>
  );
};

export default page;
