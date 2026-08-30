import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../context/useCountries";

function CountryDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { countries, loading, error } = useCountries();

  const country = countries.find((c) => c.alpha3Code === id);

  if (loading) return <p className="p-6 text-gray-500">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!country) return <p className="p-6 text-gray-500">Country not found.</p>;

  const { name, flags, population, region, capital } = country;

  return (
    <div className="px-6 md:px-16 py-10 max-w-[1200px] mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-white text-gray-950 rounded-md shadow-md px-6 py-2.5 text-sm mb-10 hover:opacity-80"
      >
        Back
      </button>

      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-20">
        <img
          src={flags?.svg || flags?.png}
          alt={`Flag of ${name}`}
          className="w-full md:w-[490px] h-auto md:h-[350px] object-cover"
        />

        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">{name}</h1>

          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <span className="font-semibold text-gray-950">Population:</span>{" "}
              {population?.toLocaleString()}
            </li>
            <li>
              <span className="font-semibold text-gray-950">Region:</span>{" "}
              {region}
            </li>
            <li>
              <span className="font-semibold text-gray-950">Capital:</span>{" "}
              {capital || "N/A"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
