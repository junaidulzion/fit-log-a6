"use client";

import React, { useContext } from "react";
import { WorkoutsContext } from "@/context/WorkoutContext";

const PlanSummary = () => {
  const { todaysPlan } = useContext(WorkoutsContext);

  const totalExercises = todaysPlan.length;

  const totalMinutes = todaysPlan.reduce((total, workout) => {
    return total + workout.duration;
  }, 0);

  const totalCalories = todaysPlan.reduce((total, workout) => {
    return total + workout.caloriesBurned;
  }, 0);

  return (
    <div className="mb-6 w-full overflow-hidden rounded-2xl border border-[#252A33] bg-[#14161B]">
      <div className="grid grid-cols-3">

        {/* Exercises */}
        <div className="flex min-w-0 flex-col justify-center border-r border-[#252A33] px-3 py-4 sm:px-5 sm:py-5 md:px-6">
          <p className="truncate text-[10px] font-medium text-slate-500 sm:text-xs md:text-sm">
            Exercises
          </p>

          <h3 className="mt-1 text-2xl font-bold leading-none text-[#C2F10D] sm:text-3xl md:text-4xl">
            {totalExercises}
          </h3>
        </div>

        {/* Minutes */}
        <div className="flex min-w-0 flex-col justify-center border-r border-[#252A33] px-3 py-4 sm:px-5 sm:py-5 md:px-6">
          <p className="truncate text-[10px] font-medium text-slate-500 sm:text-xs md:text-sm">
            Minutes
          </p>

          <h3 className="mt-1 text-2xl font-bold leading-none text-white sm:text-3xl md:text-4xl">
            {totalMinutes}
          </h3>
        </div>

        {/* Calories */}
        <div className="flex min-w-0 flex-col justify-center px-3 py-4 sm:px-5 sm:py-5 md:px-6">
          <p className="truncate text-[10px] font-medium text-slate-500 sm:text-xs md:text-sm">
            Calories
          </p>

          <h3 className="mt-1 text-2xl font-bold leading-none text-white sm:text-3xl md:text-4xl">
            {totalCalories}
          </h3>
        </div>

      </div>
    </div>
  );
};

export default PlanSummary;