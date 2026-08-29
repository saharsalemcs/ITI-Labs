function ResultRow({ value, label }) {
  return (
    <p className="text-6xl sm:text-7xl font-bold italic leading-tight">
      <span className="text-[hsl(259,100%,65%)]">{value}</span> {label}
    </p>
  );
}

function AgeResult({ result }) {
  return (
    <div>
      <ResultRow value={result.years} label="years" />
      <ResultRow value={result.months} label="months" />
      <ResultRow value={result.days} label="days" />
    </div>
  );
}

export default AgeResult;
