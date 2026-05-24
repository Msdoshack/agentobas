"use client";
import { cn } from "@/lib/utils";
import { CldImage } from "next-cloudinary";

const CustomCldImage = ({
  src,
  alt,
  fill,
  className,
}: {
  src: string;
  alt: string;
  fill: boolean;
  className: string;
}) => {
  return <CldImage src={src} alt={alt} fill={fill} className={cn(className)} />;
};

export default CustomCldImage;
