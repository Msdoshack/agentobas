import { Category } from "./Category";
import { ListingType } from "./listingType";
import { Location } from "./locations";
import { Permission } from "./permission";
import { PropertyMetadata, Property } from "./property";
import { User } from "./user";

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface AllPropertyResponse {
  data: Property[];
  metadata: PropertyMetadata;
}

export interface SinglePropertyResponse {
  data: Property;
}
export interface AllUserResponse {
  data: User[];
}
export interface SingleUserResponse {
  data: User;
}

export interface AllCategoryResponse {
  data: Category[];
}

export interface SingleCategoryResponse {
  data: Category;
}
export interface AllLocationResponse {
  data: Location[];
}

export interface SingleLocationResponse {
  data: Location;
}

export interface AllListingTypesResponse {
  data: ListingType[];
}

export interface SingleListingTypeResponse {
  data: ListingType;
}
export interface AllPermissionsResponse {
  data: Permission[];
}

export interface SinglePermissionResponse {
  data: Permission;
}
