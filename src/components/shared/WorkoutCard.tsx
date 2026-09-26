import { Iworkout } from '@/types/workout.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IworkoutcCardProps {
   workout: Iworkout;
}

const WorkoutCard = ({workout}: IworkoutcCardProps) => {
    return (
      <Link href={`/workout/${workout.id}`}>
             <div
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#15171c] shadow-lg transition duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Difficulty */}
                <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow">
                  {workout.difficulty}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Muscle Groups */}
                <div className="mt-2 mb-2 flex flex-wrap gap-2">
                  {workout.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-white transition group-hover:text-emerald-400">
                  {workout.name}
                </h3>

                <div className="text-left">
                  {/* <p className="text-xs text-gray-500"></p> */}
                  <p className="max-w-[150px] truncate text-sm font-medium text-gray-300">
                    {workout.equipment}
                  </p>
                </div>

                {/* Workout Stats */}
                <div className="mt-5 flex gap-2 border-y border-white/10 py-4">
                  <div className=" text-xs border-white/10">
                    <p className="text-gray-500">{workout.duration} min</p>
                  </div>

                  <div className=" text-xs border-white/10">
                    <p className=" text-gray-500">
                      {workout.caloriesBurned} kcal
                    </p>
                  </div>
                  {/* Rating */}
                  <div className="right-4 flex gap-1 text-xs text-gray-500">
                    <span className="max-w-[150px] truncate text-xs font-medium text-gray-300">
                      ★
                    </span>
                    {workout.rating}
                  </div>
                </div>

                {/* Button */}
                {/* <button className="mt-5 w-full rounded-xl bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-600">
                  View Workout
                </button> */}
              </div>
            </div>
      </Link>     
    );
};

export default WorkoutCard;