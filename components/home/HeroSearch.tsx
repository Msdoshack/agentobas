"use client";
import { PROPERTY_FILTER_ENUM, URLS } from "@/constants/enum";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const HeroSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue) {
      router.push(
        `${URLS.propertiesPage}?${
          PROPERTY_FILTER_ENUM.SEARCH
        }=${searchValue.toString()}`
      );
    }
  };
  return (
    <form
      className="bg-white w-full p-2 flex items-center"
      onSubmit={(e) => handleSearch(e)}
    >
      <input
        className="border border-gray-300 p-2 flex-1 text-black placeholder:text-gray-500"
        placeholder="Search For City, Location, street"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        className="bg-neutral-900 text-white p-2 rounded-r-md"
        type="submit"
      >
        <Search />
      </button>
    </form>
  );
};

export default HeroSearch;
