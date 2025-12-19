import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number, type: string) => {
  if (type === "sale") {
    return price?.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    });
  }
  return `${price?.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  })} / yr`;
};
