"use client";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <form className="relative md:w-1/2 border-2 rounded-lg border-gray-100 text-gray-600">
      <input
        type="search"
        className="w-full pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline text-gray-600 "
        placeholder="Pesquisar..."
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(event) => handleSearch(event.target.value)}
      />
      <div className="absolute top-0 left-0 inline-flex items-center p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-6 text-gray-600"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </div>
    </form>
  );
};

export default Search;
