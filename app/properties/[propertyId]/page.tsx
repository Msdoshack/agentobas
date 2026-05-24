import PropertyImage from "@/components/properties/imageSection";
import PropertyDescription from "@/components/properties/PropertyDescription";
import VideoSection from "@/components/properties/VideoSection";
import { EXTERNAL_URLS, URLS } from "@/constants/enum";
import { propertiesApi } from "@/lib/api/properties";
import {
  ArrowLeft,
  Bath,
  Bed,
  LandPlot,
  LucideProps,
  MapPin,
  Phone,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const InfoCard = ({
  property,
}: {
  property: {
    value: number | string;
    title: string;
    Icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  };
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-blue-100 p-3 rounded-3xl">
        <property.Icon size={24} color="#2563eb" />
      </div>
      <div>
        <p className="font-bold text-xl text-gray-600">{property.value}</p>
        <p className="text-sm text-gray-500">{property.title}</p>
      </div>
    </div>
  );
};
type Props = {
  params: Promise<{ propertyId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { propertyId } = await params;

  try {
    const response = await propertiesApi.get(propertyId);
    const property = response.data;

    if (!property) {
      return { title: "Property Not Found" };
    }

    // Safely look for the first image URL if it exists in the array string slice
    const ogImage =
      property.images && property.images.length > 0
        ? property.images[0].url
        : "/fallback-og.png";

    return {
      title: property.title,
      description:
        property.description || "View details for this premium listing.",
      openGraph: {
        title: property.title,
        description: property.description,
        type: "website",
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: property.title,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Property Details",
    };
  }
}
const page = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const { propertyId } = await params;

  const property = (await propertiesApi.get(propertyId)).data;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white px-4 pb-24">
        {property ? (
          <div>
            <Link
              href={`${URLS.propertiesPage}`}
              className="flex items-center text-gray-600 gap-2 py-5 cursor-pointer"
            >
              <ArrowLeft size={18} /> Go back
            </Link>

            <div className="flex flex-col md:flex-row gap-8 ">
              <PropertyImage
                images={property.images}
                videos={property.videos!}
              />

              {/* DETAILS && CONTACT AGENT  */}
              <div className="w-full md:w-1/2">
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                      {property.title}
                    </h1>
                    <p className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} />
                      {property.location.name}
                    </p>
                  </div>
                  <span className="bg-linear-to-r from-[#2563eb] to-[#1d4ed8] text-white px-5 py-2 rounded-full text-sm font-semibold uppercase">
                    For {property.listingType.name}
                  </span>
                </div>

                <div className="flex gap-8 mb-8 pb-8 border-b border-gray-300 flex-wrap">
                  {property.beds && (
                    <InfoCard
                      property={{
                        value: property.beds!,
                        title: "Bedrooms",
                        Icon: Bed,
                      }}
                    />
                  )}

                  {property.baths && (
                    <InfoCard
                      property={{
                        value: property.baths!,
                        title: "Bathrooms",
                        Icon: Bath,
                      }}
                    />
                  )}

                  {property.plots && (
                    <InfoCard
                      property={{
                        value: property.plots!,
                        title: "Plots",
                        Icon: LandPlot,
                      }}
                    />
                  )}
                </div>

                {/* CONTACT AGENT */}
                <div className="gradient-bg rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Contact Agent</h3>
                  <div className="flex gap-4 flex-wrap ">
                    <a
                      href={EXTERNAL_URLS.phone}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-50 bg-white py-4 px-6 rounded-md font-semibold text-blue-600 border-0  cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Phone size={20} />
                      Call Now
                    </a>
                    <a
                      href={EXTERNAL_URLS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-50 bg-blue-500 py-4 px-6 rounded-md font-semibold text-white border-0  cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Image
                        src={"/whatsapp.png"}
                        width={30}
                        height={30}
                        alt="chat on whatsapp"
                      />
                      Chat Agent
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* PROPERTY DESCRIPTION */}

            <div className="my-16 max-w-6xl mx-auto">
              <h2 className="text-lg font-bold text-gray-700 mb-4">
                About This Property
              </h2>

              <div className="flex flex-col md:flex-row rounded-md">
                <div className="w-full md:w-1/2 order-1 md:order-2 py-2">
                  <VideoSection videos={property.videos!} />
                </div>

                <div className="w-full md:w-1/2 order-2 md:order-1 p-3 py-4  bg-gray-50 ">
                  <PropertyDescription description={property.description} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[60vh] flex items-center justify-center text-gray-600">
            Property Not found
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
