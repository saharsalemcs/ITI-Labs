import { useMemo, useState } from "react";
import CountryList from "./CountryList";
import FilterRegion from "./FilterRegion";
import SearchInput from "./SearchInput";
import { useCountries } from "../context/CountriesContext";

function Home() {
  const { countries, loading, error } = useCountries();
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesRegion = region ? country.region === region : true;
      return matchesSearch && matchesRegion;
    });
  }, [countries, search, region]);

  return (
    <main className="px-6 sm:px-16 py-10 min-h-screen bg-gray-50">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <SearchInput value={search} onChange={setSearch} />
        <FilterRegion value={region} onChange={setRegion} />
      </div>

      <CountryList countries={filteredCountries} />
    </main>
  );
}

export default Home;
