import { URLS } from "@/constants/enum";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  title: string;
  sub: string;
};

const PromoBanner = ({ title, sub }: PropsType) => {
  return (
    <div className="relative bg-banner-frame  w-full max-w-6xl mx-auto my-5 text-white px-1.5">
      <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/50 pointer-events-none" />

      <div className="flex justify-center gap-1 sm:gap-5 md:gap-32 w-full">
        <div className="flex flex-col  gap-4 py-5">
          <h1 className="font-bold text-xs sm:text-base md:text-xl sm:tracking-wider uppercase bg-linear-to-b from-amber-50 via-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-sm">
            {title}
          </h1>
          <p className="text-[10px] sm:text-sm max-w-sm bg-linear-to-b from-amber-50 via-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-sm">
            {sub}
          </p>
          <Link
            className="rounded-full bg-amber-100 uppercase text-[8px] sm:text-xs font-m p-2 text-black self-center"
            href={URLS.propertiesPage}
          >
            Explore All
          </Link>
        </div>

        <div className="w-44 h-40 md:w-64 md:h-48 rounded-xl overflow-hidden shadow-md shrink-0">
          <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full w-full">
            {/* Top Left */}
            <div className="relative">
              <Image
                src="/ap1.jpg"
                alt="Image 1"
                fill
                sizes="(max-width: 768px) 88px, 104px"
                className="object-cover"
              />
            </div>

            {/* Top Right */}
            <div className="relative">
              <Image
                src="/ap2.jpeg"
                alt="Image 2"
                fill
                sizes="(max-width: 768px) 88px, 104px"
                className="object-cover"
              />
            </div>

            {/* Bottom Left */}
            <div className="relative">
              <Image
                src="/ap3.jpeg"
                alt="Image 3"
                fill
                sizes="(max-width: 768px) 88px, 104px"
                className="object-cover"
              />
            </div>

            {/* Bottom Right */}
            <div className="relative">
              <Image
                src="/ap4.jpeg"
                alt="Image 4"
                fill
                sizes="(max-width: 768px) 88px, 104px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

{
  /* <div className="absolute inset-0 bg-radial from-transparent via-[#0b132a]/30 to-[#0b132a]/80 pointer-events-none" /> */
}
