export interface Property {
  id: string;
  title: string;
  price: number;
  type: string;
  category: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  images: string[];
  isAvailable: boolean;
}
