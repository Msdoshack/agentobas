export enum EXTERNAL_URLS {
  whatsapp = "https://wa.me/+2348031572156",
  phone = "tel:+2348031572156",
  email = "mailto:igObas@gmail.com",
}

export enum URLS {
  homePage = "/",

  propertiesPage = "/properties",

  adminPage = "/admin",
  propertyDetailsPage = "/admin/properties",
  addPropertyPage = "/admin/properties/add",
  updatePropertyPage = "/admin/properties/update",

  allCategoryPage = "/admin/categories",
  addCategoryPage = "/admin/categories/add",
  updateCategoryPage = "/admin/categories/update",

  allTypePage = "/admin/types",
  addTypePage = "/admin/types/add",
  updateTypePage = "/admin/types/update",
}

export enum PROPERTY_TYPE_ENUM {
  ALL = "all",
  RENT = "rent",
  SALE = "sale",
}

export enum PROPERTY_CATEGORY_ENUM {
  ALL = "all",
  HOUSE = "house",
  LAND = "land",
  SHOP = "shop",
  OFFICE = "office",
}

export enum PROPERTY_FILTER_ENUM {
  TYPE = "type",
  CATEGORY = "category",
  PAGE = "page",
  SEARCH = "search",
}
