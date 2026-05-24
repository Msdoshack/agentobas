import { URLS } from "@/constants/enum";

import { Category } from "@/types/Category";
import { ListingType } from "@/types/listingType";
import { Location } from "@/types/locations";

import Link from "next/link";

type PropsType = {
  item: Location | ListingType | Category;
};

const LLCCard = ({ item }: PropsType) => {
  return (
    <Link href={`${URLS.propertiesPage}/${item.id}`} className="block">
      <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-all group border border-border">
        <p className="text-gray-800">{item.name}</p>
      </div>
    </Link>
  );
};

export default LLCCard;
