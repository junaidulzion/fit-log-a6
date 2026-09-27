// import PlanForTodayBtn from "@/components/workoutDetails/PlanForTodayBtn";
// import SaveForLaterBtn from "@/components/workoutDetailsBtn/SaveForLaterBtn";
// import TodaysPlanBtn from "@/components/workoutDetails/todaysPlanBtn";
import PlanForTodayBtn from "@/components/workoutDetailsBtn/PlanForTodayBtn";
import SaveForLaterBtn from "@/components/workoutDetailsBtn/SaveForTodayBtn";
import { Iworkout } from "@/types/workout.type";
import Image from "next/image";
import React from "react";

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkoutLibrary = async () => {
  const response = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutsData = await getWorkoutLibrary();
  const workout = workoutsData.find(
    (workout: Iworkout) => String(workout.id) === String(id),
  ) as Iworkout;

  return (
    <section className="container mx-auto px-3 py-6 sm:px-4 sm:py-8 lg:py-10">
      <div
        className=" card  card-side   flex-col overflow-hidden rounded-2xl border  border-[#252a33]   bg-[#0f1115] shadow-xl lg:flex-row">
        {/* LEFT - IMAGE */}
        <figure className="h-[280px] w-full shrink-0 sm:h-[380px] md:h-[450px] lg:h-auto lg:w-[48%]">
          <Image
            src={workout.image}
            alt={workout.name}
            width={700}
            height={700}
            className="h-full w-full object-cover"
          />
        </figure>

        {/* RIGHT - DETAILS */}
        <div className="card-body w-full gap-0 p-4 sm:p-6 lg:w-[52%] lg:p-6">
          {/* Title */}
          <h1 className="text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-2 max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold text-black sm:text-xs"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Details Table */}
          <div className="mt-4 overflow-hidden rounded-xl border border-[#252a33] bg-[#151820]">
            {/* Equipment */}
            <div className="flex min-h-[45px] items-center justify-between gap-4 border-b border-[#20242c] px-3 py-2.5 sm:px-4 sm:py-3">
              <span className="text-[9px] font-medium uppercase tracking-wider text-gray-400 sm:text-[10px]">
                Equipment
              </span>

              <span className="text-right text-[11px] text-gray-200 sm:text-xs">
                {workout.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex min-h-[45px] items-center justify-between gap-4 border-b border-[#20242c] px-3 py-2.5 sm:px-4 sm:py-3">
              <span className="text-[9px] font-medium uppercase tracking-wider text-gray-400 sm:text-[10px]">
                Difficulty
              </span>

              <span className="text-right text-[11px] text-gray-200 sm:text-xs">
                {workout.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex min-h-[45px] items-center justify-between gap-4 border-b border-[#20242c] px-3 py-2.5 sm:px-4 sm:py-3">
              <span className="text-[9px] font-medium uppercase tracking-wider text-gray-400 sm:text-[10px]">
                Sets
              </span>

              <span className="text-right text-[11px] text-gray-200 sm:text-xs">
                {workout.sets}
              </span>
            </div>

            {/* Reps */}
            <div className="flex min-h-[45px] items-center justify-between gap-4 border-b border-[#20242c] px-3 py-2.5 sm:px-4 sm:py-3">
              <span className="text-[9px] font-medium uppercase tracking-wider text-gray-400 sm:text-[10px]">
                Reps
              </span>

              <span className="text-right text-[11px] text-gray-200 sm:text-xs">
                {workout.reps}
              </span>
            </div>

            {/* Duration */}
            <div className="flex min-h-[45px] items-center justify-between gap-4 border-b border-[#20242c] px-3 py-2.5 sm:px-4 sm:py-3">
              <span className="text-[9px] font-medium uppercase tracking-wider text-gray-400 sm:text-[10px]">
                Duration
              </span>

              <span className="text-right text-[11px] text-gray-200 sm:text-xs">
                {workout.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex min-h-[45px] items-center justify-between gap-4 border-b border-[#20242c] px-3 py-2.5 sm:px-4 sm:py-3">
              <span className="text-[9px] font-medium uppercase tracking-wider text-gray-400 sm:text-[10px]">
                Calories
              </span>

              <span className="text-right text-[11px] text-gray-200 sm:text-xs">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex min-h-[45px] items-center justify-between gap-4 px-3 py-2.5 sm:px-4 sm:py-3">
              <span className="text-[9px] font-medium uppercase tracking-wider text-gray-400 sm:text-[10px]">
                Rating
              </span>

              <span className="text-right text-[11px] text-gray-200 sm:text-xs">
                {workout.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-5">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white sm:text-sm">
              Instructions
            </h2>

            <ol className="mt-3 space-y-2">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-[10px] leading-5 text-gray-400 sm:gap-3 sm:text-[11px]">
                  <span className="shrink-0 text-gray-500">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="card-actions mt-6 flex flex-wrap gap-3">
          <PlanForTodayBtn workout={workout}/>

           <SaveForLaterBtn workout={workout}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;
