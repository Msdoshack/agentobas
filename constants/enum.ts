export enum EXTERNAL_URLS {
  whatsapp = "https://wa.me/+2348031572156",
  phone = "tel:+2348031572156",
  email = "mailto:igObas@gmail.com",
}

export enum URLS {
  loginPage = "/login",
  signUp = "/signup",

  // PUBLIC ROUTES
  homePage = "/",
  propertiesPage = "/properties",

  // ADMIN ROUTES
  adminPage = "/admin",
  adminAllPropertyPage = "/admin/properties",
  adminAddPropertyPage = "/admin/properties/add",

  // Properties route
  allPropertyPage = "/properties",
  propertyDetailsPage = "/admin/properties",
  addPropertyPage = "/admin/properties/add",
  // updatePropertyPage = "/admin/properties/u

  allusersPage = "/admin/users",
  usersDetailsPage = "/admin/users",
  addUserPage = "/admin/users/add",
  updateUsersPage = "/admin/users/update",

  allCategoryPage = "/admin/categories",
  addCategoryPage = "/admin/categories/add",
  updateCategoryPage = "/admin/categories/update",

  allTypePage = "/admin/types",
  addTypePage = "/admin/types/add",
  updateTypePage = "/admin/types/update",

  allLocationPage = "/admin/locations",
  addLocationPage = "/admin/locations/add",
  updateLocationPage = "/admin/locations/update",

  allPermissionPage = "/admin/permissions",
  addPermissionPage = "/admin/permissions/add",
  updatePermissionPage = "/admin/permissions/update",
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
  TYPE = "listingType",
  CATEGORY = "category",
  PAGE = "page",
  SEARCH = "search",
  LIMIT = "limit",
  SORT = "sort",
}
