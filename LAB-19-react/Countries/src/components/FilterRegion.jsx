import { useEffect, useRef, useState } from "react";

const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

const RegionFilter = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (region) => {
    // clicking the already-selected region clears the filter
    onChange(region === value ? "" : region);
    setOpen(false);
  };

  return (
    <div className="relative w-full max-w-[200px]" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between bg-white dark:bg-blue-900 text-gray-950 dark:text-white rounded-md shadow-md px-6 py-3 text-sm"
      >
        <span>{value || "Filter by Region"}</span>
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
        <ul className="absolute z-10 mt-2 w-full bg-white dark:bg-blue-900 text-gray-950 dark:text-white rounded-md shadow-md py-3 text-sm">
          {REGIONS.map((region) => (
            <li
              key={region}
              onClick={() => handleSelect(region)}
              className="px-6 py-1.5 cursor-pointer hover:opacity-70"
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegionFilter;
