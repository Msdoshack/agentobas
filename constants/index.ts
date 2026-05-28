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
    url: `${URLS.propertiesPage}`,
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
    url: `${URLS.propertiesPage}`,
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
