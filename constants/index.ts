import { FileType, Grid2X2, Landmark, Plus } from "lucide-react";
import { PROPERTY_CATEGORY_ENUM, URLS } from "./enum";

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
    category: "lucas",
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
    category: "Rivers road",
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

export const adminNavMenu = [
  {
    id: 1,
    name: "Properties",
    children: [
      { id: 1, name: "Properties", href: URLS.adminPage, icon: Landmark },
      {
        id: 2,
        name: "Add",
        href: URLS.addPropertyPage,
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
    name: "Type",
    children: [
      { id: 1, name: "Types", href: URLS.allTypePage, icon: FileType },
      { id: 2, name: "Add", href: URLS.addTypePage, icon: Plus },
    ],
  },
];
