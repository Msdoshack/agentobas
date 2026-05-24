"use client";
import { CldImage } from "next-cloudinary";
import { PropertyImage, PropertyVideo } from "@/types/property";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ImageSection = ({
  images,
  videos,
}: {
  images: PropertyImage[];
  videos: PropertyVideo[];
}) => {
  const [imgIdx, setImgIdx] = useState(0);

  const handleImgClick = (idx: number) => {
    setImgIdx(idx);
  };
  return (
    <div className="relative w-full  md:w-1/2 h-fit">
      <div>
        <div className="relative w-full h-110 sm:w-lg sm:h-lg">
          <CldImage
            src={images[imgIdx].publicId}
            fill
            alt="Property image"
            className="object-cover"
          />
        </div>

        <div className="mt-4 flex gap-2">
          {images.map((img, i) => (
            <div
              key={i}
              className={cn(
                "relative h-16 w-16 rounded-lg overflow-hidden transition-all duration-300",
                i == imgIdx && "transform scale-110 ",
              )}
              onClick={() => handleImgClick(i)}
            >
              <CldImage
                src={img.publicId}
                alt="img"
                className="object-cover"
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
