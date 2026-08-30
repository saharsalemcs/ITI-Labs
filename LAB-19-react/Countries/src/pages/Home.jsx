import { useCountries } from "../context/useCountries";
import SearchInput from "../components/SearchInput";
import FilterRegion from "../components/FilterRegion";
import CountryList from "../components/CountryList";

function Home() {
  const { filteredCountries, loading, error } = useCountries();

  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-950 ">Loading countries...</p>
    );
  }

  if (error) {
    return <p className="text-center mt-20 text-red-500">{error}</p>;
  }

  return (
    <main className="px-6 sm:px-16 py-10 min-h-screen bg-gray-50">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <SearchInput />
        <FilterRegion />
      </div>

      <CountryList countries={filteredCountries} />
    </main>
  );
}

export default Home;
