"use client";

import { WorkoutsContext } from "@/context/WorkoutContext";
import { Iworkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveForLaterBtn = ({ workout }: { workout: Iworkout }) => {
  const { saveForLater, setSaveForLater } = useContext(WorkoutsContext);

  const handleAddToSaveForLater = () => {
    const alreadySaved = saveForLater.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.info(`"${workout.name}" is already saved`);
      return;
    }

    setSaveForLater((prev) => [...prev, workout]);

    toast.success(`"${workout.name}" saved for later`);
  };
  return (
    <button
      className="  btn btn-sm  border-0   bg-lime-400 px-4 text-[10px] font-semibold  text-black  hover:bg-lime-300sm:px-5 sm:text-[11px] "
      onClick={() => handleAddToSaveForLater()}
    >
      ♡ Save for later
    </button>
  );
};

export default SaveForLaterBtn;
