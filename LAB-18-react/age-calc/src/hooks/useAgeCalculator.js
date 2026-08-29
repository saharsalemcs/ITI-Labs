import { useForm } from "react-hook-form";
import { useState } from "react";
import { intervalToDuration, isValid as isValidDate } from "date-fns";

export function useAgeCalculator() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [result, setResult] = useState({
    years: "--",
    months: "--",
    days: "--",
  });

  const currentYear = new Date().getFullYear();

  const dayRules = {
    required: "This field is required",
    validate: {
      inRange: (v) =>
        (Number(v) >= 1 && Number(v) <= 31) || "Must be a valid day",
      isRealDate: (v) => {
        const { month, year } = getValues();
        if (!month || !year || Number(month) < 1 || Number(month) > 12)
          return true;
        const date = new Date(Number(year), Number(month) - 1, Number(v));
        const isReal =
          date.getFullYear() === Number(year) &&
          date.getMonth() === Number(month) - 1 &&
          date.getDate() === Number(v);
        return isReal || "Must be a valid date";
      },
    },
  };

  const monthRules = {
    required: "This field is required",
    validate: (v) =>
      (Number(v) >= 1 && Number(v) <= 12) || "Must be a valid month",
  };

  const yearRules = {
    required: "This field is required",
    validate: {
      notFuture: (v) => {
        const { day, month } = getValues();
        if (!day || !month)
          return Number(v) <= currentYear || "Must be in the past";
        const inputDate = new Date(Number(v), Number(month) - 1, Number(day));
        return inputDate <= new Date() || "Must be in the past";
      },
    },
  };

  const onSubmit = (data) => {
    const birthDate = new Date(
      Number(data.year),
      Number(data.month) - 1,
      Number(data.day),
    );

    if (!isValidDate(birthDate) || birthDate > new Date()) return;

    const duration = intervalToDuration({ start: birthDate, end: new Date() });

    console.log(duration);

    setResult({
      years: duration.years,
      months: duration.months,
      days: duration.days,
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    result,
    dayRules,
    monthRules,
    yearRules,
  };
}
