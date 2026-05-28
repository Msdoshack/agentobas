import { Category } from "./Category";
import { ListingType } from "./listingType";
import { Location } from "./locations";

export type PropertyImage = {
  url: string;
  publicId: string;
  thumbnail: string;
};
export type PropertyVideo = {
  url: string;
  publicId: string;
  thumbnail: string;
};

export interface Property {
  id: string;
  title: string;
  price: number;
  listingType: ListingType;
  category: Category;
  location: Location;
  beds?: number;
  baths?: number;
  sqft?: number;
  plots?: string;
  description: string;
  images: PropertyImage[];
  videos?: PropertyVideo[];
  isAvailable: boolean;
}

export interface AddProperty {
  title: string;
  description: string;
  price: number;
  listingTypeId: string;
  categoryId: string;
  locationId: string;
  beds?: number;
  baths?: number;
  plots?: string;
  images: PropertyImage[];
  videos?: PropertyVideo[];
}

export interface UpdateProperty {
  title: string;
  description: string;
  price: number;
  listingTypeId: string;
  categoryId: string;
  locationId: string;
  beds?: number;
  baths?: number;
  plots?: string;
  isAvailable: boolean;
}

export interface PropertyFilterParams {
  page?: string;
  limit?: string;
  sort?: string;
  category?: string;
  listingType?: string;
  location?: string;
  search?: string;
}

export interface PropertyMetadata {
  currentPage: number;
  firstPage: number;
  lastPage: number;
  limit: number;
  totalRecords: number;
}
