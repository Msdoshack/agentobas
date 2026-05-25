import { URLS } from "@/constants/enum";

import { Category } from "@/types/Category";
import { ListingType } from "@/types/listingType";
import { Location } from "@/types/locations";

import Link from "next/link";
import TransitionLink from "../TransitionLink";

type PropsType = {
  item: Location | ListingType | Category;
};

const LLCCard = ({ item }: PropsType) => {
  return (
    <TransitionLink
      href={`${URLS.propertiesPage}/${item.id}`}
      className="block"
    >
      <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-all group border border-border">
        <p className="text-gray-800">{item.name}</p>
      </div>
    </TransitionLink>
  );
};

export default LLCCard;
