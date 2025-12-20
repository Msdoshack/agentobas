import Image from "next/image";
import HeroFilter from "./HeroFilter";
import HeroSearch from "./HeroSearch";

const Hero = () => {
  return (
    <div className="relative h-[60vh] w-full flex items-center justify-center p-2 ">
      <Image
        src="/property.jpeg"
        alt="house"
        fill
        className="object-cover md:hidden"
        priority
      />

      {/* Desktop image */}
      <Image
        src="/home-image-2000.webp"
        alt="house"
        fill
        className="object-cover hidden md:block"
        priority
      />
      <div className="z-10 bg-black/45 text-white p-5 py-16 text-center w-full max-w-4xl flex flex-col items-center rounded-md">
        <p className="text-lg">Explore local real estate</p>
        <h4 className="text-[28px] sm:text-4xl md:text-5xl font-extrabold">
          Find a home you'll love
        </h4>

        <HeroFilter />

        <HeroSearch />
      </div>
    </div>
  );
};

export default Hero;
