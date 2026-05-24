import {
  Database,
  FileType,
  Grid2X2,
  Key,
  MapPin,
  Plus,
  User2,
} from "lucide-react";
import { PROPERTY_CATEGORY_ENUM, URLS } from "./enum";

export const API_PREFIX = "/api/v1";

export const API_BASE_URL_PROD = "https://ig-obas-api.onrender.com";
export const API_BASE_URL_DEV = "https://ig-obas-api.onrender.com";

export const PROPERTY_TYPE = [
  { id: "1", name: "all" },
  { id: "2", name: "rent" },
  { id: "3", name: "sale" },
];

export const PROPERT_CATEGORIES = [
  { id: "1", name: "all" },
  { id: "2", name: "house" },
  { id: "3", name: "land" },
  { id: "4", name: "office" },
  { id: "5", name: "shop" },
];

export const properties = [
  {
    id: "1",
    title: "Modern Downtown Penthouse",
    price: 850000,
    type: "sale",
    category: "land",
    address: "opposite campus 3",
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    description:
      "Stunning penthouse with panoramic city views, floor-to-ceiling windows, and premium finishes throughout.",
    images: ["/properties/1.webp"],
    isAvailable: true,
  },
  {
    id: "2",
    title: "Charming Victorian Home",
    price: 3500,
    type: "rent",
    category: "house",
    address: "Bembo",
    beds: 4,
    baths: 3,
    sqft: 3200,
    description:
      "Beautifully restored Victorian home with original details, modern amenities, and a spacious backyard.",
    images: ["/properties/2.webp"],
    isAvailable: true,
  },
  {
    id: "3",
    title: "Luxury Waterfront Condo",
    price: 1200000,
    type: "sale",
    category: "house",
    address: "Campus 2 road",
    beds: 2,
    baths: 2,
    sqft: 1800,
    description:
      "Exquisite waterfront living with private balcony, resort-style amenities, and breathtaking sunset views.",
    images: ["/properties/3.webp"],
    isAvailable: true,
  },
  {
    id: "4",
    title: "Contemporary Family Estate",
    price: 4200,
    type: "rent",
    address: "N.U.T",
    beds: 5,
    baths: 4,
    category: "house",
    sqft: 4500,
    description:
      "Spacious family home with open floor plan, gourmet kitchen, pool, and three-car garage.",
    images: ["/properties/4.webp"],
    isAvailable: true,
  },
  {
    id: "5",
    title: "Urban Loft Studio",
    price: 2800,
    type: "rent",
    category: "land",
    address: "Ivie road",
    beds: 1,
    baths: 1,
    sqft: 950,
    description:
      "Industrial-chic loft with exposed brick, high ceilings, and walking distance to galleries and cafes.",
    images: ["/properties/5.webp"],
    isAvailable: true,
  },

  {
    id: "6",
    title: "Elegant Colonial Mansion",
    price: 2100000,
    type: "sale",
    category: "house",
    address: "Okpogoro",
    beds: 6,
    baths: 5.5,
    sqft: 6800,
    description:
      "Grand estate featuring marble floors, wine cellar, home theater, tennis court, and manicured gardens.",
    images: ["/properties/6.webp"],
    isAvailable: true,
  },
  {
    id: "7",
    title: "Elegant Colonial Mansion",
    price: 2100000,
    type: "sale",
    category: "house",
    address: "888 Estate Row, Prestigious Hills",
    beds: 3,
    baths: 5.5,
    sqft: 6800,
    description:
      "Grand estate featuring marble floors, wine cellar, home theater, tennis court, and manicured gardens.",
    images: ["/properties/7.webp"],
    isAvailable: true,
  },
  {
    id: "8",
    title: "Elegant Colonial Mansion",
    price: 2100000,
    type: "sale",
    category: "house",
    address: "888 Estate Row, Prestigious Hills",
    beds: 4,
    baths: 5.5,
    sqft: 6800,
    description:
      "Grand estate featuring marble floors, wine cellar, home theater, tennis court, and manicured gardens.",
    images: ["/properties/8.webp"],
    isAvailable: true,
  },
];
export const propertiesNew = [
  {
    id: "1",
    title: "Modern Downtown Penthouse",
    price: 850000,
    listingType: {
      id: "1",
      slug: "for-sale",
      name: "for sale",
    },
    category: {
      id: "1",
      slug: "land",
      name: "land",
    },
    location: {
      id: "1",
      slug: "ivie-road",
      name: "ivie road",
    },
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    description:
      "Stunning penthouse with panoramic city views, floor-to-ceiling windows, and premium finishes throughout.",
    images: ["/properties/1.webp"],
    isAvailable: true,
  },
  {
    id: "2",
    title: "Charming Victorian Home",
    price: 3500,
    listingType: {
      id: "2",
      slug: "for-rent",
      name: "for rent",
    },

    category: {
      id: "2",
      slug: "house",
      name: "house",
    },

    location: {
      id: "1",
      slug: "bembo",
      name: "bembo",
    },
    beds: 4,
    baths: 3,
    sqft: 3200,
    description:
      "Beautifully restored Victorian home with original details, modern amenities, and a spacious backyard.",
    images: ["/properties/2.webp"],
    isAvailable: true,
  },
  {
    id: "3",
    title: "Luxury Waterfront Condo",
    price: 1200000,
    listingType: {
      id: "1",
      slug: "for-sale",
      name: "for sale",
    },
    category: {
      id: "2",
      slug: "house",
      name: "house",
    },
    location: {
      id: "1",
      slug: "campus-2-road",
      name: "campus 2 road",
    },
    beds: 2,
    baths: 2,
    sqft: 1800,
    description:
      "Exquisite waterfront living with private balcony, resort-style amenities, and breathtaking sunset views.",
    images: ["/properties/3.webp"],
    isAvailable: true,
  },
  {
    id: "4",
    title: "Contemporary Family Estate",
    price: 4200,
    listingType: {
      id: "1",
      slug: "for-rent",
      name: "for rent",
    },

    category: {
      id: "2",
      slug: "house",
      name: "house",
    },
    location: {
      id: "1",
      slug: "nut",
      name: "nut",
    },
    beds: 5,
    baths: 4,

    sqft: 4500,
    description:
      "Spacious family home with open floor plan, gourmet kitchen, pool, and three-car garage.",
    images: ["/properties/4.webp"],
    isAvailable: true,
  },
  {
    id: "5",
    title: "Urban Loft Studio",
    price: 2800,
    listingType: {
      id: "2",
      slug: "for-rent",
      name: "for rent",
    },
    category: {
      id: "2",
      slug: "land",
      name: "land",
    },
    location: {
      id: "4",
      slug: "ivie-road",
      name: "ivie road",
    },

    beds: 1,
    baths: 1,
    sqft: 950,
    description:
      "Industrial-chic loft with exposed brick, high ceilings, and walking distance to galleries and cafes.",
    images: ["/properties/5.webp"],
    isAvailable: true,
  },

  {
    id: "6",
    title: "Elegant Colonial Mansion",
    price: 2100000,
    listingType: {
      id: "1",
      slug: "for-sale",
      name: "for sale",
    },
    location: {
      id: "1",
      slug: "okpogoro",
      name: "okpogoro",
    },
    category: {
      id: "2",
      slug: "house",
      name: "house",
    },
    beds: 6,
    baths: 5.5,
    sqft: 6800,
    description:
      "Grand estate featuring marble floors, wine cellar, home theater, tennis court, and manicured gardens.",
    images: ["/properties/6.webp"],
    isAvailable: true,
  },
  {
    id: "7",
    title: "Elegant Colonial Mansion",
    price: 21000000,
    listingType: {
      id: "1",
      slug: "for-sale",
      name: "for sale",
    },
    location: {
      id: "1",
      slug: "winners-road",
      name: "winners road",
    },
    category: {
      id: "2",
      slug: "house",
      name: "house",
    },

    beds: 3,
    baths: 5.5,
    sqft: 6800,
    description:
      "Grand estate featuring marble floors, wine cellar, home theater, tennis court, and manicured gardens.",
    images: ["/properties/7.webp"],
    isAvailable: true,
  },
  {
    id: "8",
    title: "Elegant Colonial Mansion",
    price: 21000000,
    listingType: {
      id: "1",
      slug: "for-sale",
      name: "for sale",
    },
    location: {
      id: "1",
      slug: "rivers-road",
      name: "rivers road",
    },
    category: {
      id: "2",
      slug: "house",
      name: "house",
    },
    beds: 4,
    baths: 5.5,
    sqft: 6800,
    description:
      "Grand estate featuring marble floors, wine cellar, home theater, tennis court, and manicured gardens.",
    images: ["/properties/8.webp"],
    isAvailable: true,
  },
];

export const navMenu = [
  {
    id: 1,
    name: "Home page",
    url: `${URLS.homePage}`,
  },
  {
    id: 2,
    name: "Land",
    url: `${URLS.propertiesPage}?category=${PROPERTY_CATEGORY_ENUM.LAND}`,
  },

  {
    id: 3,
    name: "House",
    url: `${URLS.propertiesPage}?category=${PROPERTY_CATEGORY_ENUM.HOUSE}`,
  },

  {
    id: 4,
    name: "Shops",
    url: `${URLS.propertiesPage}?category=${PROPERTY_CATEGORY_ENUM.SHOP}`,
  },

  {
    id: 5,
    name: "All properties",
    url: `${URLS.propertiesPage}?category=${PROPERTY_CATEGORY_ENUM.ALL}`,
  },
];
export const navDesktopMenu = [
  {
    id: 2,
    name: "Land",
    url: `${URLS.propertiesPage}?category=${PROPERTY_CATEGORY_ENUM.LAND}`,
  },

  {
    id: 3,
    name: "House",
    url: `${URLS.propertiesPage}?category=${PROPERTY_CATEGORY_ENUM.HOUSE}`,
  },

  {
    id: 4,
    name: "Shops",
    url: `${URLS.propertiesPage}?category=${PROPERTY_CATEGORY_ENUM.SHOP}`,
  },

  {
    id: 5,
    name: "All properties",
    url: `${URLS.propertiesPage}?category=${PROPERTY_CATEGORY_ENUM.ALL}`,
  },
];

export const adminNavMenu = [
  {
    id: 1,
    name: "Properties",
    children: [
      {
        id: 1,
        name: "Properties",
        href: URLS.adminAllPropertyPage,
        icon: Database,
      },
      {
        id: 2,
        name: "Add",
        href: URLS.adminAddPropertyPage,
        icon: Plus,
      },
    ],
  },

  {
    id: 2,
    name: "Categories",
    children: [
      {
        id: 1,
        name: "Categories",
        href: URLS.allCategoryPage,
        icon: Grid2X2,
      },
      { id: 2, name: "Add", href: URLS.addCategoryPage, icon: Plus },
    ],
  },

  {
    id: 3,
    name: "Listing-Type",
    children: [
      { id: 1, name: "Types", href: URLS.allTypePage, icon: FileType },
      { id: 2, name: "Add", href: URLS.addTypePage, icon: Plus },
    ],
  },

  {
    id: 4,
    name: "Locations",
    children: [
      { id: 1, name: "Locations", href: URLS.allLocationPage, icon: MapPin },
      { id: 2, name: "Add", href: URLS.addLocationPage, icon: Plus },
    ],
  },

  {
    id: 5,
    name: "Users",
    children: [
      { id: 1, name: "Users", href: URLS.allusersPage, icon: User2 },
      { id: 2, name: "Add", href: URLS.addUserPage, icon: Plus },
    ],
  },
  {
    id: 6,
    name: "Permissions",
    children: [
      {
        id: 1,
        name: "Permissions",
        href: URLS.allPermissionPage,
        icon: Key,
      },
      { id: 2, name: "Add", href: URLS.addPermissionPage, icon: Plus },
    ],
  },
];
