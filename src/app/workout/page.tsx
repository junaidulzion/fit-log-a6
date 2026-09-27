// import { Autour_One } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Iworkout } from "@/types/workout.type";
import WorkoutCard from "@/components/shared/WorkoutCard";

const getWorkoutLibrary = async () => {
  const response = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const WorkoutLibrary = async () => {
  const workoutsData = await getWorkoutLibrary();

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl uppercase">
          The Library
        </h2>

        <p className="mt-3 max-w-2xl text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workoutsData.map((workout: Iworkout, ind: number) => {
          return <WorkoutCard key={ind} workout={workout}/>
        })}
      </div>
    </section>
  );
};

export default WorkoutLibrary;
