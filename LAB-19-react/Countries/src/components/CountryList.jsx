import CountryCard from "./CountryCard";

const CountryList = ({ countries }) => {
  if (countries.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-16">
        No countries match your search.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-12">
      {countries.map((country) => (
        <CountryCard key={country} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
