import { EXTERNAL_URLS } from "@/constants/enum";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  title,
  img,
  body,
  url,
  urlTag,
}: {
  img: string;
  title: string;
  body: string;
  url: string;
  urlTag: string;
}) => {
  return (
    <div className="flex flex-col gap-4 px-2 xl:px-0">
      <div className="relative h-80">
        <Image src={img} fill alt="agent picture " className="object-cover" />
      </div>
      <h4 className="font-semibold text-xl">{title}</h4>
      <p className="text-justify">{body}</p>

      <Link href={url} className="text-gray-600 flex items-center gap-2">
        {urlTag} <ArrowRight size={18} />
      </Link>
    </div>
  );
};

const Body = () => {
  return (
    <div className=" max-w-6xl mx-auto mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 xl:px-0">
        <div className="order-2 sm:order-1 flex flex-col justify-between gap-4 ">
          <h4 className="font-semibold text-2xl sm:3xl lg:text-4xl">
            Dedicated to the joy of home
          </h4>
          <p className="text-justify">
            Since 2020 <strong>IG OBAS</strong> Estate Agent has helped
            countless families discover the joys of homeownership. In the
            process, we built a reputation as the most respected brand in the
            industry.1 So when it comes to buying or selling a place as
            important as home, put your trust in a name trusted by millions.
          </p>

          <Link href={"#"} className="text-gray-600 flex items-center gap-2">
            About Us <ArrowRight size={18} />
          </Link>
        </div>
        <div className="relative h-80 order-1 sm:order-2">
          <Image
            src={"/joy.webp"}
            fill
            alt="agent picture "
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-24">
        <Card
          body="Nothing beats working with a buyer's agent who can help you navigate the nuances of buying a home in your local market. From the first look to the final step, let a CENTURY 21® independent agent be there for you through every moment of the homebuying process."
          img="/buy.webp"
          title="Buying your next home"
          url="#"
          urlTag="Buy a home"
        />
        <Card
          title="Selling your current home"
          body="When it comes to selling your home, exposure matters. As the most recognized name in real estate, the CENTURY 21® network can help you get the most value and exposure for your home."
          img="/sell.webp"
          url="#"
          urlTag="Sell a home"
        />
        <Card
          title="Buying your next Land"
          body="When it comes to selling your home, exposure matters. As the most recognized name in real estate, the CENTURY 21® network can help you get the most value and exposure for your home."
          img="/land.webp"
          url="#"
          urlTag="Buy a land"
        />
        <Card
          title="Selling your Land"
          body="When it comes to selling your home, exposure matters. As the most recognized name in real estate, the CENTURY 21® network can help you get the most value and exposure for your home."
          img="/land2.webp"
          url="#"
          urlTag="Sell a land"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 xl:px-0 mt-25">
        <div className="order-2 sm:order-1 flex flex-col gap-5 ">
          <h4 className="font-semibold text-2xl sm:3xl lg:text-4xl">
            Registered and Compliant
          </h4>
          <div className="flex flex-col gap-3 text-justify">
            <p>
              <strong>IG OBAS & CO. LTD</strong> is officially registered with
              the Corporate Affairs Commission (CAC) of Nigeria and operates in
              full compliance with all national laws, regulations, and industry
              standards. Our registration is a testament to our unwavering
              commitment to transparency, accountability, and ethical business
              conduct.
            </p>
            <p>
              At <strong>IG OBAS & CO. LTD</strong>, we prioritize the highest
              standards of corporate governance, ensuring that every aspect of
              our operations—from financial management to client engagement—is
              conducted responsibly and with integrity.
            </p>
            <p className="">
              By adhering strictly to regulatory requirements, we provide our
              clients, partners, and stakeholders with absolute confidence in
              our professionalism, reliability, and dedication to excellence.
              Our compliance is not just a legal obligation—it reflects our core
              values and our promise to deliver services with trustworthiness,
              fairness, and uncompromising ethical standards.
            </p>
          </div>
        </div>
        <div className="relative w-full aspect-5/6 order-1 sm:order-2">
          <Image
            src={"/certificate.jpg"}
            fill
            alt="agent picture "
            className="object-fit"
          />
        </div>
      </div>

      <div className="bg-slate-900 text-white my-16 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h3>

          <p className="text-slate-400 mb-6">
            Contact us today for personalized service and expert guidance
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={EXTERNAL_URLS.phone}
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-100 transition"
            >
              <Phone size={20} />
              234 803 157 2156
            </a>

            <a
              href={EXTERNAL_URLS.whatsapp}
              target="_blank"
              aria-label="Chat with us on WhatsApp"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold
                         flex items-center gap-2 hover:bg-blue-700 transition"
            >
              <Image
                src={"/whatsapp.png"}
                width={30}
                height={30}
                alt="chat on whatsapp"
              />
              Chat us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
