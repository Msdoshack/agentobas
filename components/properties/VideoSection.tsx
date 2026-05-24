"use client";
import { PropertyVideo } from "@/types/property";
import { CldVideoPlayer } from "next-cloudinary";

const VideoSection = ({ videos }: { videos: PropertyVideo[] }) => {
  return (
    <div className="relative  max-h-125 w-full max-w-125">
      <CldVideoPlayer
        src={videos[0].publicId}
        width={500}
        height={500}
        className="absolute top-0 left-0"
      />
    </div>
  );
};

export default VideoSection;
