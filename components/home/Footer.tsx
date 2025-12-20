import {
  EXTERNAL_URLS,
  PROPERTY_CATEGORY_ENUM,
  PROPERTY_TYPE_ENUM,
  URLS,
} from "@/constants/enum";
import Image from "next/image";
import Link from "next/link";
import Calendar from "react-calendar";
import Clock from "../Clock";

const footerMenu = [
  {
    id: 1,
    title: "About us",
    url: "",
  },
  {
    id: 2,
    title: "Terms of Service",
    url: "",
  },

  {
    id: 3,
    title: "Privacy",
    url: "",
  },
  {
    id: 4,
    title: "Legal",
    url: "",
  },
];

const quickLinksMenu = [
  {
    id: 1,
    title: "Lands for sale",
    url: `${URLS.propertiesPage}?type=${PROPERTY_TYPE_ENUM.SALE}&category=${PROPERTY_CATEGORY_ENUM.LAND}`,
  },

  {
    id: 2,
    title: "Houses for sale",
    url: `${URLS.propertiesPage}?type=${PROPERTY_TYPE_ENUM.SALE}&category=${PROPERTY_CATEGORY_ENUM.HOUSE}`,
  },

  {
    id: 3,
    title: "Rent Apartment",
    url: `${URLS.propertiesPage}?type=${PROPERTY_TYPE_ENUM.RENT}&category=${PROPERTY_CATEGORY_ENUM.HOUSE}`,
  },

  { id: 4, title: "All properties", url: `${URLS.propertiesPage}` },
];

const contact = [
  { id: 1, title: "Phone", url: EXTERNAL_URLS.phone, img: "/phone.png" },
  {
    id: 2,
    title: "Facebook",
    url: "https://facebook.com/gift.ichani.9",
    img: "/facebook.png",
  },
  {
    id: 3,
    title: "Whatsapp",
    url: EXTERNAL_URLS.whatsapp,
    img: "/whatsapp.png",
  },
  {
    id: 4,
    title: "igobas@gmail.com",
    url: EXTERNAL_URLS.email,
    img: "/email.png",
  },
];

const Footer = () => {
  return (
    <div className="p-5 py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div>
          <h4 className="font-extrabold text-lg">IG OBAS</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 mt-8">
          <div className=" bg-slate-800 text-white p-4 rounded-md decoration-none">
            <Clock />
            <Calendar locale="en-NG" value={new Date()} />
          </div>

          <div className="flex flex-col gap-5 sm:items-center">
            {footerMenu.map((item) => (
              <Link href={item.url} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-5 sm:items-center">
            {quickLinksMenu.map((item) => (
              <Link href={item.url} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col  sm:justify-center">
            <p className="font-medium">Contact Us</p>
            <div className="flex flex-col mt-5 gap-5">
              {contact.map((item) => (
                <a href={item.url} className="flex gap-2" key={item.id}>
                  <Image
                    className="h-5 w-5"
                    src={item.img}
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                  {item.title == "Phone" ? item.url.substring(4) : item.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-sm">
          <p>All right reserved </p>
          <p>&copy; {new Date().getFullYear()} IG OBAS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
