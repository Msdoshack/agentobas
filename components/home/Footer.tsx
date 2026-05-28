import {
  EXTERNAL_URLS,
  PROPERTY_CATEGORY_ENUM,
  PROPERTY_TYPE_ENUM,
  URLS,
} from "@/constants/enum";
import Image from "next/image";

import Calendar from "react-calendar";
import Clock from "../Clock";
import TransitionLink from "../TransitionLink";

const footerMenu = [
  {
    id: 1,
    title: "About us",
    url: "/#about",
  },
  {
    id: 2,
    title: "Terms of Service",
    url: "/#about",
  },

  {
    id: 3,
    title: "Privacy",
    url: "/#about",
  },
  {
    id: 4,
    title: "Legal",
    url: "/#legal",
  },
];

const quickLinksMenu = [
  {
    id: 1,
    title: "Lands",
    url: `${URLS.propertiesPage}?category=${PROPERTY_CATEGORY_ENUM.LAND}`,
  },

  {
    id: 2,
    title: "Houses",
    url: `${URLS.propertiesPage}?category=${PROPERTY_CATEGORY_ENUM.HOUSE}`,
  },

  {
    id: 3,
    title: "Shops",
    url: `${URLS.propertiesPage}?category=${PROPERTY_CATEGORY_ENUM.SHOP}`,
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
    title: "giftichani@gmail.com",
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

            <div className="[&_.react-calendar\_\_month-view\_\_weekdays\_\_weekday_abbr]:no-underline mt-4">
              <Calendar locale="en-NG" value={new Date()} />
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:items-center">
            <h1 className="font-medium underline underline-offset-8 text-sm">
              Quick Links
            </h1>
            {footerMenu.map((item) => (
              <TransitionLink href={item.url} key={item.id} className="text-sm">
                {item.title}
              </TransitionLink>
            ))}
          </div>

          <div className="flex flex-col gap-5 sm:items-center">
            <h1 className="font-medium underline underline-offset-8 text-sm">
              Properties
            </h1>
            {quickLinksMenu.map((item) => (
              <TransitionLink href={item.url} key={item.id} className="text-sm">
                {item.title}
              </TransitionLink>
            ))}
          </div>

          <div className="flex flex-col ">
            <p className="font-medium underline underline-offset-8 text-sm">
              Contact Us
            </p>
            <div className="flex flex-col mt-5  gap-5 text-sm">
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
