"use client";
import { URLS } from "@/constants/enum";
import { cn, formatPrice } from "@/lib/utils";
import { Property } from "@/types/property";
import { Bed, Heart, MapPin, Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PropsType = {
  property: Property;
  isGrid?: boolean;
};

const PropertyCard = ({ property, isGrid = true }: PropsType) => {
  return (
    <div
      className={cn(
        "bg-white rounded-md shadow-lg cursor-pointer transition-all hover:transform hover:-translate-y-2",
        !isGrid && "min-w-80 flex-nowrap"
      )}
    >
      <div className="relative h-56 flex items-center justify-center">
        <Link href={`${URLS.propertiesPage}/${property.id}`}>
          <Image src={property.images[0]} alt="property image" fill />
        </Link>

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg border-none cursor-pointer transition transform duration-200 hover:scale-110">
          <Heart
            size={20}
            // fill={favorites.includes(property.id) ? "#ef4444" : "none"}
            // color={favorites.includes(property.id) ? "#ef4444" : "#94a3b8"}
          />
        </button>

        <div className="absolute left-4 bottom-4 gradient-bg text-white px-3 py-1.5 rounded-full font-bold shadow-md text-sm">
          {formatPrice(property.price, property.type)}
        </div>
      </div>

      <Link href={`${URLS.propertiesPage}/${property.id}`}>
        <div className="p-2 sm:p-5">
          <h3 className="font-semibold text-sm sm:text-base mb-2 text-gray-800">
            {property.title}
          </h3>
          <div className="mb-2">
            <span className="bg-gray-100 rounded-md px-2 py-0.5 text-sm sm:text-base  text-gray-700 w-fit border capitalize">
              {property.category}
            </span>
            <span className="text-sm text-gray-500">
              {" "}
              - for {property.type}
            </span>
          </div>
          <p className="text-gray-500 flex gap-2 mb-4 text-sm ">
            <MapPin size={16} />
            <span className="line-clamp-1 w-full">{property.address}</span>
          </p>

          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Bed size={18} color="#2563eb" />
              <span className="font-semibold">{property.beds}</span> beds
            </div>
            {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#64748b",
            }}
          >
            <Bath size={18} color="#2563eb" />
            <span style={{ fontWeight: "600" }}>{property.baths}</span> baths
          </div> */}
            <div className="flex items-center gap-2 text-gray-600">
              <Square size={18} color="#2563eb" />
              <span className="font-semibold">{property.sqft}</span> sqft
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
