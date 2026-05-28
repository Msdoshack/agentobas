"use client";
import { Suspense, FormEvent, useState } from "react";
import { PROPERTY_FILTER_ENUM } from "@/constants/enum";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// 1. Core Logic Component
const SearchBoxInner = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currSearch = searchParams.get(PROPERTY_FILTER_ENUM.SEARCH) || "";
  const [searchTerm, setSearchTerm] = useState(currSearch);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (searchTerm.trim()) {
      params.set(PROPERTY_FILTER_ENUM.SEARCH, searchTerm.trim());
    } else {
      params.delete(PROPERTY_FILTER_ENUM.SEARCH);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      className="bg-white rounded-2xl p-1 flex items-center gap-2 shadow-2xl w-full"
      onSubmit={handleSearch}
    >
      <Search className="text-slate-400 ml-4" size={24} />

      <input
        value={searchTerm} // Controlled input component for better stability
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

// 2. Safe Suspense Export Wrapper
const SearchBox = () => {
  return (
    <Suspense
      fallback={
        <div className="bg-gray-100 rounded-2xl h-18 w-full animate-pulse shadow-2xl" />
      }
    >
      <SearchBoxInner />
    </Suspense>
  );
};

export default SearchBox;
