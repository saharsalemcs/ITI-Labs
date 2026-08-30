import { useContext } from "react";
import { CountriesContext } from "./CountriesContext";

export const useCountries = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error("useCountries must be used inside a CountriesProvider");
  }
  return context;
};
