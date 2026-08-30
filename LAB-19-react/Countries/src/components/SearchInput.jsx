import { useCountries } from "../context/useCountries";
import { Search } from "lucide-react";

function SearchInput() {
  const { search, setSearch } = useCountries();
  return (
    <div className="flex items-center gap-4 w-full max-w-120 bg-white rounded-md shadow-md px-6 py-4">
      <Search />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country..."
        className="w-full bg-transparent outline-none text-sm text-gray-950  placeholder:text-gray-400"
      />
    </div>
  );
}

export default SearchInput;
