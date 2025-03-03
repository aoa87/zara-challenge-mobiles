"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchBoxProps {
  initialSearch: string;
  placeholder?: string;
  delay?: number;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  initialSearch,
  placeholder = "SEARCH",
  delay = 200,
}) => {
  const [search, setSearch] = useState(initialSearch);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      params.set("search", e.target.value);
      router.push(`?${params.toString()}`);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const clearSearch = () => {
    setSearch("");
    params.delete("search");
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="relative flex w-full mb-5 text-base">
      {search && (
        <button
          onClick={clearSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer"
        >
          ✕
        </button>
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleSearchChange}
        className="w-full pb-2 border-b border-black text-lg focus:outline-none placeholder-gray-400"
      />
    </div>
  );
};

export default SearchBox;
