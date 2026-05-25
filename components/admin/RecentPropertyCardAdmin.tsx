import { URLS } from "@/constants/enum";
import { formatPrice } from "@/lib/utils";
import { Property } from "@/types/property";
import { Eye, MapPin } from "lucide-react";

import CustomCldImage from "../CustomCldImage";
import TransitionLink from "../TransitionLink";

type PropsType = {
  property: Property;
};

const RecentPropertyCardAdmin = ({ property }: PropsType) => {
  return (
    <TransitionLink
      href={`${URLS.propertiesPage}/${property.id}`}
      className="block"
    >
      <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-all group border border-border">
        <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted relative">
          <CustomCldImage
            src={property.images[0].publicId}
            alt={property.title.substring(0, 10)}
            className="w-full h-full object-cover"
            fill
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold group-hover:text-primary transition-colors">
            {property.title}
          </p>
          <p className="text-sm text-muted-foreground">
            {property.listingType.name}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span className="text-xs font-medium">
                {property.location.name}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {property.isAvailable}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-emerald-600 dark:text-emerald-400">
            {formatPrice(property.price, property.listingType.name)}
          </p>
          {property.plots && (
            <p className="text-sm text-muted-foreground">
              {property.plots} plots
            </p>
          )}
          {property.beds && (
            <p className="text-xs text-muted-foreground mt-1">
              {property.beds} bedrooms
            </p>
          )}
        </div>
      </div>
    </TransitionLink>
  );
};

export default RecentPropertyCardAdmin;
