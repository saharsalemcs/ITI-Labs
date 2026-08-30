const FILTERS = ["all", "active", "completed"];

const FilterTabs = ({ filter, onChange, className = "" }) => {
  return (
    <div className={`filter-tabs ${className}`}>
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`filter-tabs-button ${
            filter === f ? "filter-tabs-button--active" : ""
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
