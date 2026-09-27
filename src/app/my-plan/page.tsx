"use client";
import ListedWorkoutPlan from "@/components/shared/ListedWorkoutPlan";
import ListedWorkoutSaved from "@/components/shared/ListedWorkoutSaved";
import PlanSummary from "@/components/shared/PlanSummary";
import WorkoutCard from "@/components/shared/WorkoutCard";
import { WorkoutsContext } from "@/context/WorkoutContext";
import { Iworkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

const MyPlan = () => {
  const { todaysPlan, saveForLater } = useContext(WorkoutsContext);

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("rating");
  console.log(todaysPlan, saveForLater, "Todays Plan", "Save For later");
  console.log(
    "Today's Plan IDs:",
    todaysPlan.map((workout) => workout.id),
  );

  console.log(
    "Saved IDs:",
    saveForLater.map((workout) => workout.id),
  );

  const sortWorkout = (workout:Iworkout[]) =>{
    const sortedWorkout=[...workout]
    if (sortBy==="duration"){
      sortedWorkout.sort((a,b)=> b.duration -a.duration)
    } else if (sortBy === "calories"){
      sortedWorkout.sort ((a,b) => b.caloriesBurned- a.caloriesBurned)
    } else if (sortBy ==="rating") {
      sortedWorkout.sort ((a,b)=> b.rating - a.rating)
    }
    return sortedWorkout;
  }

  const sortedPlanWorkout = sortWorkout(todaysPlan)
  const sortedSavedWorkout = sortWorkout(saveForLater)
  return (
    <div className="container mx-auto w-full px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <h2 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
        My Plan
      </h2>

      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <PlanSummary />

      <div className="flex justify-end px-4 sm:px-6 md:px-8 lg:px-0">
        <select
        value={sortBy}
          onChange={(e)  => setSortBy(e.target.value as "duration" | "calories"| "rating")}
          className="select select-success w-full max-w-[180px] sm:max-w-[200px]"
        >
          <option disabled>Sort By</option>
          <option value={'duration'}>Duration</option>
          <option value={'calories'}>Calories</option>
          <option value={'rating'}>Rating</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="flex mx-auto">
        <div className="tabs tabs-box mt-8 w-full bg-[#0F1115] p-2">
          {/* Today's Plan Tab */}
          <input
            type="radio"
            name="my_tabs_6"
            className="tab text-slate-600"
            aria-label="Today's Plan"
          />

          <div className="tab-content rounded-xl bg-[#14161B] p-6">
            {sortedPlanWorkout.length > 0 ? (
              <div className="space-y-4">
                {sortedPlanWorkout.map((workout: Iworkout) => (
                  <ListedWorkoutPlan key={workout.id} workout={workout} />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <h2 className="mb-2 text-2xl font-bold uppercase text-white">
                  Nothing here yet
                </h2>

                <p className="mb-8 max-w-md text-[#A1A1AA]">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link href="/workout">
                  <button className="btn rounded-full border-none bg-[#C2F10D] px-6 text-black hover:bg-[#d4ff3d]">
                    Go to Workout
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Saved Tab */}
          <input
            type="radio"
            name="my_tabs_6"
            className="tab text-slate-600"
            aria-label="Saved"
            defaultChecked
          />

          <div className="tab-content rounded-xl border border-[#252A33] bg-[#14161B] p-6">
            {sortedSavedWorkout.length > 0 ? (
              <div className="space-y-4">
                {sortedSavedWorkout.map((workout: Iworkout) => (
                  <ListedWorkoutSaved key={workout.id} workout={workout} />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <h2 className="mb-2 text-2xl font-bold uppercase text-white">
                  Nothing here yet
                </h2>

                <p className="mb-8 max-w-md text-[#A1A1AA]">
                  Browse the library and save a workout for later.
                </p>

                <Link href="/workout">
                  <button className="btn rounded-full border-none bg-[#C2F10D] px-6 text-black hover:bg-[#d4ff3d]">
                    Go to Workout
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
