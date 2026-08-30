import { useState } from "react";
import { useCountries } from "../context/useCountries";

const REGIONS = ["Africa", "Asia", "America", "Europe", "Oceania"];

function RegionFilter() {
  const { region, toggleRegion, setRegion } = useCountries();
  const [open, setOpen] = useState(false);

  const handleSelect = (value) => {
    toggleRegion(value);
    setOpen(false);
    setRegion(value);
  };

  return (
    <div className="relative w-full max-w-[200px]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between bg-white  text-gray-950 rounded-md shadow-md px-6 py-3 text-sm"
      >
        <span>{region || "Filter by Region"}</span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-white  text-gray-950 rounded-md shadow-md py-3 text-sm">
          {REGIONS.map((r) => (
            <li
              key={r}
              onClick={() => handleSelect(r)}
              className="px-6 py-1.5 cursor-pointer hover:opacity-70"
            >
              {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegionFilter;
