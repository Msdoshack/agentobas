import { URLS } from "@/constants/enum";
import Image from "next/image";
import Link from "next/link";

type PropsType = {
  title: string;
  sub: string;
  link: string;
  linkTitle: string;
};

const Dividers = ({ title, sub, linkTitle, link }: PropsType) => {
  return (
    <div className="relative bg-banner-frame w-full max-w-6xl mx-auto my-5 px-1.5">
      <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/50 pointer-events-none" />
      {/* bg-linear-to-r from-blue-300 via-teal-200 to-emerald-200 */}
      <div className="flex justify-center gap-1 sm:gap-5 md:gap-16 w-full">
        <div className="flex flex-col gap-4 py-5">
          <h1 className="font-bold text-xs sm:text-base md:text-xl sm:tracking-wider uppercase bg-linear-to-b from-amber-50 via-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-sm">
            {title}
          </h1>
          <p className="text-[10px] sm:text-sm max-w-sm bg-linear-to-b from-amber-50 via-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-sm">
            {sub}
          </p>
          <Link
            className="rounded-full uppercase text-[8px] sm:text-xs p-2 animate-pulse bg-amber-100 self-center font-medium"
            href={link}
          >
            {linkTitle}
          </Link>
        </div>

        <div className="relative w-44 h-36 md:w-64 md:h-44 rounded-xl overflow-hidden shadow-md shrink-0">
          <Image
            src={"/home-image-800.webp"}
            alt="Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Dividers;
