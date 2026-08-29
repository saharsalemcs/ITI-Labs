const CountryCard = ({ country }) => {
  const { name, population, region, capital, flags } = country;

  return (
    <div className="bg-white dark:bg-blue-900 rounded-md shadow-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
      <img
        src={flags?.svg || flags?.png}
        alt={`Flag of ${name.common}`}
        className="w-full h-40 object-cover"
      />
      <div className="p-6 pb-10">
        <h2 className="font-extrabold text-lg mb-4 text-gray-950 dark:text-white">
          {name.common}
        </h2>
        <p className="text-sm mb-1 text-gray-950 dark:text-white">
          <span className="font-semibold">Population: </span>
          {population.toLocaleString()}
        </p>
        <p className="text-sm mb-1 text-gray-950 dark:text-white">
          <span className="font-semibold">Region: </span>
          {region}
        </p>
        <p className="text-sm text-gray-950 dark:text-white">
          <span className="font-semibold">Capital: </span>
          {capital?.[0] || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
