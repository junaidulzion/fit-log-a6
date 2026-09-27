import { WorkoutsContext } from "@/context/WorkoutContext";
import { Iworkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

interface IListedWorkoutCardPorps {
  workout: Iworkout;
}

const ListedWorkoutPlan = ({ workout }: IListedWorkoutCardPorps) => {
  const { removeFromPlan } = useContext(WorkoutsContext);
  return (
    <div className="w-full flex items-center gap-4 rounded-xl border border-[#252a33] bg-[#11141a] p-2.5 hover:bg-[#161a21] transition">
      {/* Image */}
      <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Workout Info */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold uppercase text-white">
          {workout.name}
        </h3>

        <p className="text-xs text-gray-400">{workout.category}</p>

        <div className="mt-1 flex items-center gap-4 text-[10px] text-gray-300">
          <span>◷ {workout.duration} min</span>
          <span>🔥 {workout.calories} kcal</span>
          <span>⭐ {workout.rating}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="hidden shrink-0 items-center gap-2 sm:flex">
        <Link href={`/workout/${workout.id}`}>
          <button className="rounded-full border border-gray-600 px-4 py-2 text-xs text-white hover:bg-white/10">
            View Details
          </button>
        </Link>

        <button className="rounded-full bg-lime-400 px-4 py-2 text-xs font-bold text-black hover:bg-lime-300">
          ✓ Mark as Done
        </button>

        <button
          onClick={() => removeFromPlan(workout.id)}
          className="text-gray-400 hover:text-red-500 text-xl"
          aria-label="Remove workout"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ListedWorkoutPlan;
