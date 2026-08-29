import { createContext, useContext, useEffect, useState } from "react";
const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  useEffect(function () {
    async function getCountries() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          "https://api.restcountries.com/countries/v5?limit=20",
          {
            headers: {
              Authorization: "Bearer rc_live_0e24ae28595247d1961340b9c3f59690",
            },
          },
        );

        if (!res.ok) throw new Error("Failed to fetch countries");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const countryName = country.names?.common?.toLowerCase() || "";

    const matchesSearch = countryName.includes(search.toLowerCase());

    const matchesRegion = region === "" || country.region === region;

    return matchesSearch && matchesRegion;
  });

  return (
    <CountriesContext.Provider
      value={{
        countries,
        filteredCountries,

        search,
        setSearch,

        region,
        setRegion,

        loading,
        error,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export function useCountries() {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error("useCountries must be used within a CountriesProvider");
  }
  return context;
}
