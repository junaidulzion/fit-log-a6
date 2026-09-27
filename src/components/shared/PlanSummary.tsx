"use client";

import React, { useContext } from "react";
import { WorkoutsContext } from "@/context/WorkoutContext";

const PlanSummary = () => {
  const { todaysPlan } = useContext(WorkoutsContext);

  // Total number of workouts
  const totalExercises = todaysPlan.length;

  // Total workout duration
  const totalMinutes = todaysPlan.reduce((total, workout) => {
    return total + workout.duration;
  }, 0);

  // Total calories
  const totalCalories = todaysPlan.reduce((total, workout) => {
    return total + workout.caloriesBurned;
  }, 0);

  return (
    <div className="mb-6 grid grid-cols-3 rounded-xl border border-[#252A33] bg-[#14161B]">
      {/* Exercises */}
      <div className="border-r border-[#252A33] px-4 py-5 sm:px-6">
        <p className="text-xs text-slate-500 sm:text-sm">Exercises</p>

        <h3 className="mt-1 text-2xl font-bold text-[#C2F10D] sm:text-3xl">
          {totalExercises}
        </h3>
      </div>

      {/* Minutes */}
      <div className="border-r border-[#252A33] px-4 py-5 sm:px-6">
        <p className="text-xs text-slate-500 sm:text-sm">Minutes</p>

        <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
          {totalMinutes}
        </h3>
      </div>

      {/* Calories */}
      <div className="px-4 py-5 sm:px-6">
        <p className="text-xs text-slate-500 sm:text-sm">Calories</p>

        <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
          {totalCalories}
        </h3>
      </div>
    </div>
  );
};

export default PlanSummary;
