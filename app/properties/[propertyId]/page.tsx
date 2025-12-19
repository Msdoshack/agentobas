import { properties } from "@/constants";
import { EXTERNAL_URLS, URLS } from "@/constants/enum";
import {
  ArrowLeft,
  Bath,
  Bed,
  LucideProps,
  Mail,
  MapPin,
  Phone,
  Square,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const InfoCard = ({
  property,
}: {
  property: {
    value: number;
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

const page = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const { propertyId } = await params;

  const property = properties.find(
    (property) => property.id === parseInt(propertyId)
  );

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
              {/* IMAGE */}
              <div className="relative w-full  md:w-1/2 h-96">
                <Image src={property.images[0]} fill alt="Property image" />
              </div>

              {/* DETAILS && CONTACT AGENT  */}
              <div className="w-full md:w-1/2">
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2">
                      {property.title}
                    </h1>
                    <p className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} />
                      {property.address}
                    </p>
                  </div>
                  <span className="bg-linear-to-r from-[#2563eb] to-[#1d4ed8] text-white px-5 py-2 rounded-full text-sm font-semibold uppercase">
                    For {property.type}
                  </span>
                </div>

                <div className="flex gap-8 mb-8 pb-8 border-b border-gray-300 flex-wrap">
                  <InfoCard
                    property={{
                      value: property.beds,
                      title: "Bedrooms",
                      Icon: Bed,
                    }}
                  />
                  <InfoCard
                    property={{
                      value: property.baths,
                      title: "Bathrooms",
                      Icon: Bath,
                    }}
                  />
                  <InfoCard
                    property={{
                      value: property.sqft,
                      title: "Square Feet",
                      Icon: Square,
                    }}
                  />
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
            <div className="my-16">
              <h2 className="text-lg font-bold text-gray-700 mb-4">
                About This Property
              </h2>
              <p className="text-gray-700">{property.description}</p>
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
