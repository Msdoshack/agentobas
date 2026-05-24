"use client";
import { URLS } from "@/constants/enum";
import { cn, formatPrice } from "@/lib/utils";
import { Property } from "@/types/property";
import { Bed, Heart, LandPlot, MapPin } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useState } from "react";

type PropsType = {
  property: Property;
  isGrid?: boolean;
};

const PropertyCard = ({ property, isGrid = true }: PropsType) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        "bg-white rounded-md shadow-lg cursor-pointer transition-all hover:transform hover:-translate-y-2",
        !isGrid && "min-w-80 flex-nowrap",
      )}
    >
      <div className="relative h-56 flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-linear-to-r from-gray-200 via-gray-300 to-gray-200" />
        )}
        <Link href={`${URLS.propertiesPage}/${property.id}`}>
          <CldImage
            src={property.images[0].publicId}
            alt="image"
            fill
            className={`object-cover duration-500 ease-in-out ${
              isLoading ? "scale-105 opacity-0" : "scale-100 opacity-100"
            }`}
            onLoad={() => setIsLoading(false)}
          />
        </Link>

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg border-none cursor-pointer transition transform duration-200 hover:scale-110">
          <Heart size={20} />
        </button>

        <div className="absolute left-4 bottom-4 gradient-bg text-white px-3 py-1.5 rounded-full font-bold shadow-md text-sm">
          {formatPrice(property.price, property.listingType.name)}
        </div>
      </div>

      <Link href={`${URLS.propertiesPage}/${property.id}`}>
        <div className="p-1 sm:p-3">
          <h3 className=" font-medium text-sm  text-gray-800">
            {property.title}
          </h3>

          <div className="my-1">
            <span className="bg-gray-100 rounded-md px-2 py-0.5 text-xs  text-gray-700 w-fit border capitalize">
              {property.category.name}
            </span>
            <span className="text-sm text-gray-500">
              {" "}
              - for {property.listingType.name}
            </span>
          </div>

          <p className="text-gray-500 flex gap-2 mt-2 mb-4 text-sm items-center  ">
            <MapPin size={16} />
            <span className="line-clamp-1 w-full">
              {property.location.name}
            </span>
          </p>

          <div className="flex gap-4 text-sm">
            {property.beds && (
              <div className="flex items-center gap-2 text-gray-600">
                <Bed size={18} color="#2563eb" />
                <span className="font-semibold">{property.beds}</span> beds
              </div>
            )}

            {property.plots && (
              <div className="flex items-center gap-1 text-gray-600">
                <LandPlot size={18} color="#2563eb" />
                <span className="font-medium text-xs">
                  {property.plots} plot
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
