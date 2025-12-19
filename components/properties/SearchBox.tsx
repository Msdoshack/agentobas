"use client";
import { PROPERTY_FILTER_ENUM } from "@/constants/enum";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currSearch = searchParams.get("search");
  const [searchTerm, setSearchTerm] = useState(currSearch);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) {
      router.push(`${pathname}?${PROPERTY_FILTER_ENUM.SEARCH}=${searchTerm}`);
    }
  };
  return (
    <form
      className=" bg-white rounded-2xl p-1 flex items-center gap-2 shadow-2xl"
      onSubmit={(e) => handleSearch(e)}
    >
      <Search className="text-slate-400 ml-4" size={24} />

      <input
        defaultValue={currSearch as string}
        type="text"
        placeholder="Search by location, property type, or keywords..."
        className="flex-1 px-2 py-4 text-lg text-slate-900 outline-none border-none placeholder:text-sm sm:text-base"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
