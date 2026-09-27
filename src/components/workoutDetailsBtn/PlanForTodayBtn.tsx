"use client";

import { WorkoutsContext } from "@/context/WorkoutContext";
import { Iworkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const PlanForTodayBtn = ({ workout }: { workout: Iworkout }) => {
  const { todaysPlan, setTodaysPlan } = useContext(WorkoutsContext);

  const handleSetTodaysPlan = () => {
    const alreadyAdded = todaysPlan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.info(`"${workout.name}" is already in today's plan`);
      return;
    }

    setTodaysPlan((prev) => [...prev, workout]);

    toast.success(`"${workout.name}" added to today's plan`);
  };

  return (
    <button
      className="btn btn-sm border-0 bg-lime-400 px-4 text-[10px] font-semibold text-black hover:bg-lime-300 sm:px-5 sm:text-[11px]"
      onClick={handleSetTodaysPlan}
    >
      <span>▣</span>
      Add to today's plan
    </button>
  );
};

export default PlanForTodayBtn;
