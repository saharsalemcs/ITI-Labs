import { useAgeCalculator } from "../hooks/useAgeCalculator";
import DateInput from "./DateInput";
import AgeResult from "./AgeResult";

function AgeCalculatorForm() {
  const {
    register,
    handleSubmit,
    errors,
    result,
    dayRules,
    monthRules,
    yearRules,
  } = useAgeCalculator();

  return (
    <div className="relative w-full max-w-xl rounded-[30px] rounded-br-[100px]  bg-white p-8 sm:p-12 shadow-xl">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 sm:gap-6">
          <DateInput
            label="DAY"
            placeholder="DD"
            error={errors.day}
            registration={register("day", dayRules)}
          />
          <DateInput
            label="MONTH"
            placeholder="MM"
            error={errors.month}
            registration={register("month", monthRules)}
          />
          <DateInput
            label="YEAR"
            placeholder="YYYY"
            error={errors.year}
            registration={register("year", yearRules)}
          />
        </div>

        <div className="relative my-8 sm:my-10">
          <hr />
          <button
            type="submit"
            className="absolute right-0 -top-8 h-16 w-16 rounded-full bg-violet-600 hover:bg-black duration-300 flex items-center justify-center"
          >
            <img src="/assets/images/icon-arrow.svg" />
          </button>
        </div>
      </form>

      <AgeResult result={result} />
    </div>
  );
}
export default AgeCalculatorForm;
