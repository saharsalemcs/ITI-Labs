import { useEffect, useState } from "react";
import { CountriesContext } from "./CountriesContext";

const API_URL = "https://countries.dev/countries";

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError(null);
        // const res = await fetch(
        //   "https://api.restcountries.com/countries/v5?limit=20",
        //   {
        //     headers: {
        //       Authorization: "Bearer rc_live_0e24ae28595247d1961340b9c3f59690",
        //     },
        //   },
        // );
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch countries");
        const data = await res.json();
        console.log(data);
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesSearch && matchesRegion;
  });
  const toggleRegion = (value) => {
    setRegion((prev) => (prev === value ? "" : value));
  };

  return (
    <CountriesContext.Provider
      value={{
        countries,
        filteredCountries,
        loading,
        error,
        search,
        setSearch,
        region,
        setRegion,
        toggleRegion,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
