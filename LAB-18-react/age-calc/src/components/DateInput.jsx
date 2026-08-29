function DateInput({ label, placeholder, error, registration }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className={`text-xs font-bold tracking-widest ${
          error ? "text-[hsl(0,100%,67%)]" : "text-[hsl(0,1%,44%)]"
        }`}
      >
        {label}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        {...registration}
        className={`w-24 sm:w-32 rounded-lg border px-4 py-2 text-2xl sm:text-3xl font-bold outline-none
          focus:border-[hsl(259,100%,65%)] focus:ring-1 focus:ring-[hsl(259,100%,65%)]
          ${error ? "border-[hsl(0,100%,67%)]" : "border-[hsl(0,0%,86%)]"}`}
      />
      {error && (
        <span className="text-xs italic text-[hsl(0,100%,67%)]">
          {error.message}
        </span>
      )}
    </div>
  );
}

export default DateInput;
